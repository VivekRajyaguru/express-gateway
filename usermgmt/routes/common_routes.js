
var express = require('express');
var router = express.Router();
var User = require('../models/dummy');
var userService = require('../services/userservice');

router.post('/login', (req, resp, next) => {
    userService.login(req, (data) => {
        resp.json(data);
    });
});

router.post('/getAccessCredentials', (req, resp, next) => {
    userService.getAccessCredentials(req, (data) => {
        resp.json(data);
    });
});

module.exports = router;
