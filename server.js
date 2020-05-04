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
// const winston = require('winston');
var $bean = require('./app/common/utils/hyd-bean-utils');
const httpCasClient = require('http-cas-client');
var HyperError = require('./app/common/obj/hyper-error/hyper-error');
var winston = require('./app/common/middleware/winston-logger');

const handler = httpCasClient({
    // cas: 3, // CAS protocol version 1, 2, 3

    casServerUrlPrefix: 'https://sso.hyper.com:8443/cas',
    serverName: 'http://chat.hyper.com:9000',
    // serverName: 'https://chat.hyper.com:9999',
    // servicePrefix: 'http://chat.hyper.com:9000',
    // serverPath: 'https://sso.hyper.com:8443',

    client: {
        service: "http://chat.hyper.com:9000",
        slo: true, // Use SLO?
        renew: false, // CAS renew.
        gateway: false, // CAS gateway
        useSession: false,
        method: 'GET',
        // The resource path rules let cas client ignore.
        // ignore: [/\.(ico|css|js|jpe?g|svg|png)/],
        proxy: {
            acceptAny: false,
            allowedChains: () => true,
            callbackUrl: "http://chat.hyper.com:9000/proxy_call_back",
            // callbackUrl: "https://chat.hyper.com:9999/proxy_call_back",
            receptorUrl: "/proxy_call_back"
        }
    },

    server: {
        loginUrl: "https://sso.hyper.com:8443/cas/login",

        // CAS Server URIs. Normally no change is required.
        // Useful when use a nonstandard cas server or url re-writed.
        path: {
            login: '/login',
            logout: '/logout',
            validate: '/validate',
            serviceValidate: '/serviceValidate',
            proxyValidate: '/proxyValidate',
            proxy: '/proxy',
            p3: {
                serviceValidate: '/p3/serviceValidate',
                proxyValidate: '/p3/proxyValidate',
            }
        }
    }
});
var initDataService = require('./app/service/initData.service');
var certificate = fs.readFileSync('./static/ssl/server.pem');
const userService = require('./app/service/user.service');
var checkToken = require('./app/common/middleware/jwt-authentication');
var handleRequest = require('./app/common/middleware/request-handler');
// Initialize the default app
var admin = require('firebase-admin');
var fcm = admin.initializeApp({credential: admin.credential.applicationDefault()});
VGlobal = {
    fcm: fcm
};

var options = {
    host: '127.0.0.1',
    servername: 'chat.hyper.com',
    port: 9999,
    path: '/',
    key: fs.readFileSync('./static/ssl/key.pem'),
    cert: fs.readFileSync('./static/ssl/cert.pem'),
    ca: fs.readFileSync("./static/ssl/caroot.cer"),
    requestCert: false,
    rejectUnauthorized: true
};
// set morgan to log info about our requests for development use.
// app.use(morgan('dev'));
app.use(morgan('combined', {stream: winston.stream}));
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
    key: 'JSESSIONID',
    secret: 'Hyperlogy Chatapp',
    resave: true,
    saveUninitialized: true,
    cookie: {
        expires: 6000000
    }
}));
ignoreRequest = (path, req) => {
    console.log("Ignore Request");
    console.log(req.path);
    // return true;
    if (req.path.indexOf("proxyCallback") != -1) {
        return true;
    }
}


// app.use(async (req, res, next) => {
//     function hander() {
//
//     }
//
//     if (!await handler(req, res, hander)) {
//         console.log('CAS server');
//         return res.end();
//     }
//
//     const {principal, ticket} = req;
//     console.log("principal");
//     console.log(principal);
//     console.log('Ticket');
//     console.log(ticket);
//     next();
// });

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

const db = require('./app/common/config/db.config.js');

// force: true will drop the table if it already exists
// db.sequelize.sync({force: true}).then(() => {
//     console.log('Drop and Resync with { force: true }');
// });

db.sequelize.sync({}).then(() => {
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
// app.use(handleRequest);
require('./app/route/pubStream.route')(app);
require('./app/route/app.route')(app);
require('./app/route/device.route')(app);
app.use(checkToken);
require('./app/route/socket.route')(app);
require('./app/route/user.route')(app);
require('./app/route/chat.route')(app);
require('./app/route/messenger.route')(app);
require('./app/route/emoji.route')(app);
require('./app/route/userChat.route')(app);
require('./app/route/userMessenger.route')(app);
require('./app/route/userFriend.route')(app);
require('./app/route/post.route')(app);
require('./app/route/comment.route')(app);
require('./app/route/userReactPostComment.route')(app);
require('./app/route/notification.route')(app);

// Xử lý error
app.use(function (err, req, res, next) {
    console.log("Handle Error");
    if (err instanceof HyperError) {
        /*
        In case the error has already been handled, we just transform the error
        to our return object.
        */
        return res.status(err.status).send({
            error: err.code,
            message: err.message,
        })
    } else {
        console.error(err) // For debugging reasons
        // It would be an unhandled error, here we can just return our generic error object.
        return res.status(500).send({
            error: 'GENERIC',
            message: 'Hệ thống xử lý gặp lỗi. Thử lại hoặc liên hệ quản trị viên',
        })
    }
})

// route for handling 404 requests(unavailable routes)
app.use(function (req, res, next) {
    res.status(404).send({message: "Tài nguyên bạn yêu cầu không tồn tại !"});
});


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

// Run server

// no ssl
app.listen(9000, () => {
    console.log(`Example app listening on port 9000 !`);
    // initDataService.insertEmojis();
})

// ssl
// var server = https.createServer(options, app).listen(9999, function () {
//     var host = server.address().address
//     var port = server.address().port
//
//     console.log("App listening at https://%s:%s", host, port);
// });
