var express = require('express');
var https = require('https');
const axios = require('axios');
var ConnectCas = require('node-cas-client');
var bodyParser = require('body-parser');
var session = require('express-session');
var SessionStore = require('express-mysql-session')
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
var cors = require('cors');
var path = require('path');
var url = require('url');
var fs = require('fs');
var app = express();
var initDataService = require('./app/service/initData.service');
var certificate = fs.readFileSync('./static/ssl/server.pem');
const userService = require('./app/service/user.service');
var checkToken = require('./app/common/middleware/JWT_authentication');
VGlobal = {};

var options = {
    host: '127.0.0.1',
    servername: 'chat.hyper.com',
    port: 9999,
    path: '/',
    key: fs.readFileSync('./static/ssl/client-key.pem'),
    cert: fs.readFileSync('./static/ssl/client-cert.pem'),
    passphrase: '123456'
};
// set morgan to log info about our requests for development use.
app.use(morgan('dev'));
app.use(express.static(__dirname + '/static'));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
// var engines = require('consolidate');
// app.use(express.static(path.join(__dirname, '/views')));
// app.engine('html', engines.mustache);

// initialize body-parser to parse incoming parameters requests to req.body
app.use(bodyParser.urlencoded({extended: true}));

// initialize cookie-parser to allow us access the cookies stored in the browser.
app.use(cookieParser());
app.use(cors());

// initialize express-session to allow us track the logged-in user across sessions.
app.use(session({
    key: 'user_sid',
    secret: 'Hyperlogy Chatapp',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 6000000
    }
}));

var casClient = new ConnectCas({
    requestCert: false,
    rejectUnauthorized: false,
    // ca: [certificate],
    ca: [fs.readFileSync('./static/ssl/server.pem', {encoding: 'utf-8'})],
    debug: true,
    ignore: [
        // "/signup"
    ],
    match: [],
    // servicePrefix: 'https://chat.hyper.com:9999',
    servicePrefix: 'http://chat.hyper.com:9000',
    serverPath: 'https://sso.hyper.com:8443',
    paths: {
        // validate: '/',
        // serviceValidate: '/p3/serviceValidate',
        proxy: null,
        login: '/cas/login',
        logout: '/cas/logout',
        proxyCallback: null
    },
    redirect: false,
    gateway: false,
    renew: false,
    slo: true,
    cache: {
        enable: false,
        ttl: 5 * 60 * 1000,
        filter: []
    },
    fromAjax: {
        header: 'x-client-ajax',
        status: 418
    }
});

// app.use(casClient.core());


// This middleware will check if user's cookie is still saved in browser and user is not set, then automatically log the user out.
// This usually happens when you stop your express server after login, your cookie still remains saved in the browser.
// app.use((req, res, next) => {
//     if (req.cookies.user_sid && !req.session.user) {
//         res.clearCookie('user_sid');
//     }
//     next();
// });


// var global middleware function to check for logged-in users
sessionChecker = (req, res, next) => {
    if (req.session.user && req.cookies.user_sid) {
        next();
    } else {
        res.redirect('/login');
    }
};

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors());

app.post('/mobileLogin', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    userService.mobileLogin(req, res).then(function (data) {
        res.json(data);
    })
})


app.post('/mobileSignup', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    userService.mobileSignUp(req, res).then(function (data) {
        res.json(data);
    })
})

require('./app/route/app.route')(app);


app.use(checkToken);

// Xử lý error
app.use(function (err, req, res, next) {
    console.log('error name ' + err.name);
    console.log('error message ' + err.message);
    console.error('error stacktrace ' + err.stack)
    res.send(Json.toString(err));
})

const db = require('./app/common/config/db.config.js');

// force: true will drop the table if it already exists
// db.sequelize.sync({force: true}).then(() => {
//     console.log('Drop and Resync with { force: true }');
// });

db.sequelize.sync().then(() => {
    console.log('Drop and Resync with { force: true }');
});

// app.get('/', cas.bounce, function (req, res) {
//     res.send('<html><body>Hello!</body></html>');
// });
//
// // Unauthenticated clients will receive a 401 Unauthorized response instead of
// // the JSON data.
// app.get('/api', cas.block, function (req, res) {
//     res.json({success: true});
// });
//
// // An example of accessing the CAS user session variable. This could be used to
// // retrieve your own local user records based on authenticated CAS username.
// app.get('/api/user', cas.block, function (req, res) {
//     res.json({cas_user: req.session[cas.session_name]});
// });
//
// // Unauthenticated clients will be redirected to the CAS login and then to the
// // provided "redirectTo" query parameter once authenticated.
// app.get('/authenticate', cas.bounce_redirect);
//
// // This route will de-authenticate the client with the Express server and then
// // redirect the client to the CAS logout page.
// app.get('/logout', cas.logout);


// app.get('/logout', casClient.logout());


// app.get('/', function (req, res, next) {
//     // Do whatever you like here, then call the logout middleware
//     console.log('Session : ');
//     console.log(req.session);
//     console.log('Session user ');
//     console.log(req.session.cas['user']);
//     res.render('home');
// });

require('./app/route/socket.route')(app);
require('./app/route/user.route')(app);
require('./app/route/channel.route')(app);
require('./app/route/messenger.route')(app);
require('./app/route/emoji.route')(app);
require('./app/route/userChannel.route')(app);
require('./app/route/userMessenger.route')(app);
require('./app/route/userFriend.route')(app);


// //Uploading multiple files
// app.post('/uploadMulti', uploadFile.array('files', 12), (req, res, next) => {
//     const files = req.body.files
//     console.log('Body');
//     console.log(req.body);
//     console.log('Files');
//     console.log(req.body.files);
//     if (!files) {
//         const error = new Error('Please choose files')
//         error.httpStatusCode = 400
//         return next(error)
//     }
//
//     res.send(files)
//
// })

// app.post('/upload', uploadFile.single('file'), function (req, res, next) {
//     // req.file is the `avatar` file
//     // req.body will hold the text fields, if there were any
//     console.log('Body');
//     console.log(req.body);
//     console.log('File');
//     console.log(req.file);
// })

// app.post('/upload', uploadFile.array('file', 12), function (req, res, next) {
//     // req.files is array of `photos` files
//     // req.body will contain the text fields, if there were any
//     console.log('Body');
//     console.log(req.body);
//     console.log('File');
//     console.log(req.files);
// })

// var cpUpload = uploadFile.fields([{name: 'file', maxCount: 1}, {name: 'gallery', maxCount: 8}])
// app.post('/upload', cpUpload, function (req, res, next) {
//     // req.files is an object (String -> Array) where fieldname is the key, and the value is array of files
//     //
//     // e.g.
//     //  req.files['avatar'][0] -> File
//     //  req.files['gallery'] -> Array
//     //
//     // req.body will contain the text fields, if there were any
// })

// route for handling 404 requests(unavailable routes)
app.use(function (req, res, next) {
    res.status(404).redirect('/404')
});


// Run server

// no ssl
app.listen(9000, () => {
    console.log(`Example app listening on port 9000 !`);
    // initDataService.insertEmojis();
})

// ssl
// var server = https.createServer(options, app).listen(9999, function () {
//     var host = server.address().address
//     var port = server.address().port7
//
//     console.log("App listening at https://%s:%s", host, port);
// });


exports.casClient = casClient;
