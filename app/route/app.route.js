const db = require('../common/config/db.config');
var multer = require('multer');
var md5 = require('md5');
var fs = require('fs');
var path = require('path');
var mkdirp = require('mkdirp');
const appService = require('../service/app.service');
const userService = require('../service/user.service');
const baseService = require('../service/redis.service');
const socketService = require('../service/socket.service');
const messengerService = require('../service/messenger.service');
const messengerStatic = require('../common/obj/objStatic/messengerStatic');
const casClient = require('../../server').casClient;
var userModel = require('../model/user.model');
var $bean = require('../common/utils/hyd-bean-utils');
var rootPathUploadFile = "/uploads";
var shortPathUploadFile = 'uploads';
var modelTypeUser = {
    mapTable: db.user,
    mapObj: userModel
}


// SET STORAGE
var storage = multer.diskStorage({
    destination: async function (req, file, cb) {
        console.log('Upload File Name');
        console.log(file);
        console.log('Req body');
        console.log(req.body);
        let objMessenger = {
            userId: req.session.user.id,
            channelId: req.body.channelId,
            message: file.originalname
        }
        let insertedMessenger = await messengerService.insert(objMessenger);
        if ($bean.isNotEmpty(insertedMessenger)) {
            let hashMessengerId = md5(insertedMessenger.id);
            let tempObj = {
                hashMessengerId: hashMessengerId,
                messengerId: insertedMessenger.id
            }
            req.session[req.body['fileId']] = tempObj;
            let locationFile = rootPathUploadFile + '/' + hashMessengerId.substr(hashMessengerId.length - 2, 2) + '/' + hashMessengerId.substr(hashMessengerId.length - 4, 2);
            if (!fs.existsSync(locationFile)) {
                mkdirp(locationFile, function (err) {
                    if (err) {
                        console.error(err);
                    } else {
                        cb(null, locationFile);
                    }
                });
            } else {
                cb(null, locationFile);
            }
        }
    },
    filename: function (req, file, cb) {
        let fileName = file.originalname;
        if ($bean.isNotEmpty(req.session[req.body['fileId']])) {
            fileName = req.session[req.body['fileId']].hashMessengerId + '-' + req.session[req.body['fileId']].messengerId;
        }
        cb(null, fileName);
    }
})

var uploadFile = multer({storage: storage})


module.exports = function (app) {
    app.get('/', function (req, res) {
        console.log('Đăng nhập với SSO');
        console.log(req.session);
        res.render('index');
        // console.log('Email user ');
        // console.log(req.session.cas.user);
        // let User = userService.findByEmail(req.session.cas.user).then(function (user) {
        //     req.session.user = user.dataValues;
        //     res.redirect('/home');
        // })
    });

    // route for Home-Page
    app.get('/home', (req, res) => {
        if (req.session.user && req.cookies.user_sid) {
            res.render('home');
        } else {
            res.redirect('/login');
        }
        // res.render('home');
    });

    app.get('/login', function (req, res) {
        if (req.session.user && req.cookies.user_sid) {
            res.redirect('/home');
        } else {
            req.session['statusLogin'] = "";
            res.render('login', {param: req.session['statusLogin']});
        }
    });

    app.post('/login', function (req, res) {
        userService.login(req, res);
    })

    app.post('/mobileLogin', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        userService.mobileLogin(req, res).then(function (data) {
            res.json(data);
        })
    })

    app.get('/userLogin', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.json(req.session.user);
    })

    app.get('/signup', function (req, res) {
        req.session['statusSignup'] = '';
        res.render('signup', {param: req.session['statusSignup']});
    })

    app.post('/signup', function (req, res) {
        userService.signUp(req, res);
    })

    app.post('/mobileSignup', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        console.log('Mobile sigup');
        console.log(req.body);
        userService.mobileSignUp(req, res).then(function (data) {
            res.json(data);
        })
    })

    // or do some logic yourself
    // app.get('/logout', function (req, res, next) {
    //     // Do whatever you like here, then call the logout middleware
    //     console.log('Success logout user !');
    //     req.session['statusLogin'] = 'logout';
    //     res.clearCookie('user_sid');
    //     req.session.destroy();
    //     console.log(req.session);
    //     casClient.logout();
    //     res.redirect('/home');
    // });

    //
    // route for user logout
    app.get('/logout', function (req, res) {
        userService.logOut(req, res);
    });

    // app.get('/logout', function (req, res) {
    //     console.log('Success logout user !');
    //     req.session['statusLogin'] = 'logout';
    //     res.clearCookie('user_sid');
    //     req.session.destroy();
    //     console.log(req.session);
    //     res.json({message: 'Logout successfully !'});
    //     casClient.logout();
    // });

    // or do some logic yourself
    // app.get('/cas/logout', function (req, res, next) {
    //     // Do whatever you like here, then call the logout middleware
    // });

    app.post('/upload', uploadFile.single('file'), (req, res, next) => {
        const file = req.file
        console.log('Update upload File');
        console.log(file);
        if (file) {
            let updateMessenger = {
                id: req.session[req.body['fileId']].messengerId,
                type: (file.mimetype.includes('image')) ? messengerStatic.TYPE_IMAGE : messengerStatic.TYPE_FILE,
                fileSize: file.size,
                contentType: file.mimetype,
                fileExtension: path.extname(file.originalname).replace('.', ''),
                path: file.destination.replace(rootPathUploadFile + '/', '') + '/' + file.filename,
                status: messengerStatic.STATUS_ORIGINAL,
                typeRole: messengerStatic.TYPE_ROLE_PRIMARY,
                modifiedDate: new Date()
            }
            messengerService.updateMessage(req.session.user, updateMessenger, true).then(function (data) {
                if ($bean.isNotEmpty(req.body.message)) {
                    //    Message gửi kèm theo
                    let messenger = {
                        userId: req.session.user.id,
                        channelId: req.body.channelId,
                        message: req.body.message,
                        type: messengerStatic.TYPE_TEXT,
                        status: messengerStatic.STATUS_ORIGINAL,
                        typeRole: messengerStatic.TYPE_ROLE_PRIMARY,
                        modifiedDate: new Date()
                    }
                    messengerService.insertMessage(req.session.user, messenger);
                }
                res.json(data);
                console.log('Session for fileId');
                console.log(req.session[req.body['fileId']]);
                delete req.session[req.body['fileId']];
                console.log('After delete session for fileId');
                console.log(req.session[req.body['fileId']]);

            })
        } else {
            throw new Error('error.upload.file');
        }
    })


    app.get('/preview/*', async function (req, res) {
        let originalUrl = req.originalUrl;
        let tempArray = originalUrl.split('/');
        let fileName = tempArray[tempArray.length - 1];
        let messengerId = fileName.substring(fileName.indexOf('-') + 1, fileName.length);
        let findMessenger = await messengerService.get(messengerId);
        // res.json({'message': 'abc'});
        if ($bean.isNotEmpty(findMessenger)) {
            console.log('File');
            console.log(findMessenger);
            fs.readFile(rootPathUploadFile + '/' + findMessenger.path, function (err, data) {
                if (err) throw err; // Fail if the file can't be read.
                res.writeHead(200, {'Content-Type': findMessenger.contentType});
                res.end(data); // Send the file data to the browser.
            });
        } else {
            throw new Error('error.preview.file');
        }
    })

    app.get('/attachments/*', async function (req, res) {
        let originalUrl = req.originalUrl;
        let tempArray = originalUrl.split('/');
        let fileName = tempArray[tempArray.length - 1];
        console.log('File Name');
        console.log(fileName);
        let messengerId = fileName.substring(fileName.indexOf('-') + 1, fileName.length);
        let findMessenger = await messengerService.get(messengerId);
        if ($bean.isNotEmpty(findMessenger)) {
            console.log('Messenger');
            console.log(findMessenger);
            console.log('MessengerId');
            console.log(messengerId);
            // res.setHeader('Content-disposition', 'attachment; filename=' + findMessenger.message);
            // res.setHeader('Content-type', findMessenger.contentType);
            // var filestream = fs.createReadStream(rootPathUploadFile + '/' + findMessenger.path);
            // filestream.pipe(res);
            // res.download(rootPathUploadFile + '/' + findMessenger.path);
            var files = fs.createReadStream(rootPathUploadFile + '/' + findMessenger.path);
            res.writeHead(200, {'Content-disposition': 'attachment; filename=' + findMessenger.message}); //here you can specify file name
            files.pipe(res); // also you can set content-type
        } else {
            throw new Error('error.download.file');
        }
        // res.download(findMessenger.path, function (err) {
        //     if (err) {
        //         // Handle error, but keep in mind the response may be partially-sent
        //         // so check res.headersSent
        //         console.log(err);
        //         throw new Error('error.download.file');
        //     } else {
        //         // decrement a download credit, etc.
        //         console.log('Nothing wrong');
        //         res.json({'message': 'download File'});
        //     }
        // })
        // Set disposition and send it.
        // res.json({'message': 'abc'});
        // res.don(findMessenger.path, function (err, data) {
        //     if (err) throw err; // Fail if the file can't be read.
        //     res.writeHead(200, {'Content-Type': findMessenger.contentType});
        //     res.setHeader('Content-disposition', 'attachment; filename=' + findMessenger.message);
        //     res.end(data); // Send the file data to the browser.
        // });
    })

    // app.get('/download/*', async function (req, res) {
    //     let originalUrl = req.originalUrl;
    //     let tempArray = originalUrl.split('/');
    //     let fileName = tempArray[tempArray.length - 1];
    //     console.log('File Name');
    //     console.log(fileName);
    //     let messengerId = fileName.substring(fileName.indexOf('-') + 1, fileName.length);
    //     let findMessenger = await messengerService.get(messengerId);
    //     console.log('Messenger');
    //     console.log(findMessenger);
    //     console.log('MessengerId');
    //     console.log(messengerId);
    //     res.setHeader('Content-disposition', 'attachment; filename=' + findMessenger.message);
    //     res.setHeader('Content-type', findMessenger.contentType);
    //     var filestream = fs.createReadStream(findMessenger.path);
    //     filestream.pipe(res);
    //     // res.download(findMessenger.path, function (err) {
    //     //     if (err) {
    //     //         // Handle error, but keep in mind the response may be partially-sent
    //     //         // so check res.headersSent
    //     //         console.log(err);
    //     //         throw new Error('error.download.file');
    //     //     } else {
    //     //         // decrement a download credit, etc.
    //     //         console.log('Nothing wrong');
    //     //         res.json({'message': 'download File'});
    //     //     }
    //     // })
    //     // Set disposition and send it.
    //     // res.json({'message': 'abc'});
    //     // res.don(findMessenger.path, function (err, data) {
    //     //     if (err) throw err; // Fail if the file can't be read.
    //     //     res.writeHead(200, {'Content-Type': findMessenger.contentType});
    //     //     res.setHeader('Content-disposition', 'attachment; filename=' + findMessenger.message);
    //     //     res.end(data); // Send the file data to the browser.
    //     // });
    // });

    app.post('/subChannel', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        let sessionId = (req.body.userId) ? req.body.userId : req.session.user.id;
        // socketService.subChannel(req.session.user.id, req.body.channelId).then(function (data) {
        //     res.json(data);
        // })
        socketService.subChannel(sessionId, req.body.channelId).then(function (data) {
            res.json(data);
        })
    });

    app.get('/dashboard', function (req, res) {
        // if (req.session.user && req.cookies.user_sid) {
        //     baseService.findById(req.session.user.id, modelTypeUser).then(user => {
        //         res.render('dashboard');
        //     })
        // } else {
        //     res.redirect('/login');
        // }

        res.render('dashboard');
    });

    app.get('/403', function (req, res) {
        res.render('403');
    });

    app.get('/404', function (req, res) {
        res.render('404');
    });

    app.get('/500', function (req, res) {
        res.render('500');
    });
}
