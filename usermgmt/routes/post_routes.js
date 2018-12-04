
var express = require('express');
var router = express.Router();
var User = require('../models/dummy');
var userService = require('../services/userservice');

router.post('/updateUserById/:id', (req, resp, next) => {
    userService.updateUserById(req, (data) => {
        resp.json(data);
    });
});

module.exports = router;
