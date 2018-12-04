
var express = require('express');
var router = express.Router();
var User = require('../models/dummy');
var userService = require('../services/userservice');

router.get('/userList', (req, resp, next) => {
    User.find((err, data) => {
        if (err) resp.send(err)
        else resp.json(data);
    });
});

router.get('/userById/:id', (req, resp, next) => {
    userService.getUserById(req.param.id, (data) => {
        resp.json(data);
    });
});

router.get('/userByName/:name', (req, resp, next) => {
    userService.getUserByUserName(req.param.name, (data) => {
        resp.json(data);
    });
});


module.exports = router;
