const db = require('../common/config/db.config');
var $bean = require('../common/utils/hyd-bean-utils');
const redisService = require('../service/redis.service');
const TYPE_NEW_MESSENGER = 'NEW_MESSENGER';
const TYPE_UPDATED_MESSENGER = 'UPDATED_MESSENGER';
const TYPE_DELETED_MESSENGER = 'DELETED_MESSENGER';
const TYPE_NEW_REACT = 'NEW_REACT';
const TYPE_UPDATED_REACT = 'UPDATED_REACT';
const TYPE_DELETED_REACT = 'DELETED_REACT';
const TYPE_NEW_USER = 'NEW_USER';
const TYPE_UPDATED_USER = 'UPDATED_USER';
const TYPE_DELETED_USER = 'DELETED_USER';
const TYPE_NEW_CHAT = 'NEW_CHAT'
const TYPE_UPDATED_CHAT = 'UPDATED_CHAT'
const TYPE_DELETED_CHAT = 'DELETED_CHAT'
const TYPE_NEW_USER_CHAT = 'NEW_USER_CHAT';
const TYPE_UPDATED_USER_CHAT = 'UPDATED_USER_CHAT';
const TYPE_DELETED_USER_CHAT = 'DELETED_USER_CHAT';
module.exports = function (app) {

    app.post('/pushStream/newMessenger', async function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        let result = await redisService.pubStreamObj({
            type: TYPE_NEW_MESSENGER,
            value: req.body,
            chatId: req.body.chatId
        });
        res.json(req.body);
    });
    app.post('/pushStream/updateMessenger', async function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        let result = await redisService.pubStreamObj({
            type: TYPE_UPDATED_MESSENGER,
            value: req.body,
            chatId: req.body['chatId']
        });
        res.json(req.body);
    });
    app.post('/pushStream/deleteMessenger', async function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        let result = await redisService.pubStreamObj({
            type: TYPE_DELETED_MESSENGER,
            value: req.body,
            chatId: req.body['chatId']
        });
        res.json(req.body);
    });
    app.post('/pushStream/newChat', async function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        let result = await redisService.pubStreamObj({
            type: TYPE_NEW_CHAT,
            value: req.body,
            chatId: req.body['chatId']
        });
        res.json(req.body);
    });
    app.post('/pushStream/updateChat', async function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        let result = await redisService.pubStreamObj({
            type: TYPE_UPDATED_CHAT,
            value: req.body,
            chatId: req.body['chatId']
        });
        res.json(req.body);
    });
    app.post('/pushStream/deleteChat', async function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        let result = await redisService.pubStreamObj({
            type: TYPE_DELETED_CHAT,
            value: req.body,
            chatId: req.body['chatId']
        });
        res.json(req.body);
    });
    app.post('/pushStream/addUserChat', async function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        let result = await redisService.pubStreamObj({
            type: TYPE_NEW_USER_CHAT,
            value: req.body,
            chatId: req.body['chatId']
        });
        res.json(req.body);
    });
    app.post('/pushStream/updateUserChat', async function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        let result = await redisService.pubStreamObj({
            type: TYPE_UPDATED_USER_CHAT,
            value: req.body,
            chatId: req.body['chatId']
        });
        res.json(req.body);
    });
    app.post('/pushStream/deleteUserChat', async function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        let result = await redisService.pubStreamObj({
            type: TYPE_DELETED_USER_CHAT,
            value: req.body,
            chatId: req.body['chatId']
        });
        res.json(req.body);
    });
    app.post('/pushStream/addReact', async function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        let result = await redisService.pubStreamObj({
            type: TYPE_NEW_REACT,
            value: req.body,
            messengerId: req.body['messengerId'],
            chatId: req.body['chatId']
        });
        res.json(req.body);
    });
    app.post('/pushStream/updateReact', async function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        let result = await redisService.pubStreamObj({
            type: TYPE_UPDATED_REACT,
            value: req.body,
            messengerId: req.body['messengerId'],
            chatId: req.body['chatId']
        });
        res.json(req.body);
    });
    app.post('/pushStream/deleteReact', async function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        let result = await redisService.pubStreamObj({
            type: TYPE_DELETED_REACT,
            value: req.body,
            messengerId: req.body['messengerId'],
            chatId: req.body['chatId']
        });
        res.json(req.body);
    });
    app.post('/pushStream/addUser', async function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        let result = await redisService.pubStreamObj({
            type: TYPE_NEW_USER,
            value: req.body,
            chatId: req.body['system']
        });
        res.json(req.body);
    });
    app.post('/pushStream/updateUser', async function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        let result = await redisService.pubStreamObj({
            type: TYPE_UPDATED_USER,
            value: req.body,
            chatId: req.body['system']
        });
        res.json(req.body);
    });
    app.post('/pushStream/deleteUser', async function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        let result = await redisService.pubStreamObj({
            type: TYPE_DELETED_USER,
            value: req.body,
            chatId: req.body['system']
        });
        res.json(req.body);
    });
}
