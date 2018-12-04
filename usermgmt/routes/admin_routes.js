
var express = require('express');
var router = express.Router();
var userService = require('../services/userservice');

router.post('/checkUserExists', (req, resp, next) => {
    userService.checkUserExists(req.userName, req.email, (data) => {
        resp.json(data);
    });  
});

router.post('/createUser', (req, resp, next) => {
    userService.createUser(req, (data) => {
        resp.json(data);
    });
});

/* router.get('/userList', (req, resp, next) => {
    userService.getUserList((data) => {
        resp.json(data);
    });
});
 */
/* router.post('/updateUserById/:id', (req, resp, next) => {
    userService.updateUserById(req, (data) => {
        resp.json(data);
    });
}); */

router.get('/deleteUserById/:id', (req, resp, next) => {
    userService.deleteUserById(req.param.id, (data) => {
        resp.json(data);
    });
});

/* router.get('/userById/:id', (req, resp, next) => {
    userService.getUserById(req.param.id, (data) => {
        resp.json(data);
    });
});

router.get('/userByName/:name', (req, resp, next) => {
    userService.getUserById(req.param.name, (data) => {
        resp.json(data);
    });
});
 */
module.exports = router;
