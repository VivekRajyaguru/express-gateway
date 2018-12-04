var User = require('../models/dummy');

module.exports = {
    checkUserExists: (userName, email, callback) => {
        User.find({userName: userName}, (err, data) => {
            if (err) callback({error: 'error'})
            else {
                if (data && data.length) {
                    callback({message: true})
                } else {
                    checkUserExistsWithEmail(userName, email, callback);
                }
            }
        });
        
    },
    createUser: (req, callback) => {
        var user = new User({
            userName: req.body.userName,
            password: req.body.password,
            contactNo: req.body.contactNo,
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            apiKey: req.body.apiKey,
            apiSecret: req.body.apiSecret,
            scope: req.body.scope,
            user_id: req.body.userId,
            credential_id: req.body.credentialId
        });
        user.save((err, data) => {
            if (err) callback(err);
            else callback(data);
        });
    },
    getUserById: (id, callback) => {
        User.findById(id, (err, data) => {
            if (err) callback(err);
            else callback(data);
        });
    },
    getUserByUserName: (userName, callback) => {
        User.find({userName: userName}, (err, data) => {
            if (err) callback(err);
            else callback(data);
        });
    },
    updateUserById: (req, callback) => {
        User.findById({_id: req.param.id}, (err, data) => {
            if(err) callback(err);
            else {
                Object.assign(data, req.body).save( (err, result) => {
                    if (err) callback(err);
                    else callback(result);
                });
            }
        });
    },
    deleteUserById: (id, callback) => {
        User.deleteOne({_id: id}, (err, data) => {
            if (err) callback(err);
            else callback(data);
        });
    },
    getUserList: (callback) => {
        User.find((err, data) => {
            if (err) callback(err);
            else callback(data);
        });
    },
    login: (req, callback) => {
        User.find({email: req.body.email, password: req.body.password}, (err, data) => {
            if (err) callback(err);
            else {
                if(data && data.length) callback({Authorize: true});
                else callback({Authorize: false});
            }
        });
    },
    getAccessCredentials: (req, callback) => {
        User.find({email: req.body.email, password: req.body.password}, (err, data) => {
            if (err) callback(err);
            else {
                if(data && data.length) {
                    var result = {
                        '_id': data[0]._id,
                        'Authorization': 'apiKey '+ data[0].apiKey + ':'+data[0].apiSecret,
                        'scope': data[0].scope
                    }
                    callback(result);
                } else {
                    callback(null);
                }
            }
        });
    } 

};


checkUserExistsWithEmail = (userName, email, callback) => {
    User.find({userName: userName, email: email}, (err, data) => {
        if (err) callback({error: 'error'})
        else {
            if (data && data.length) {
                callback({message: true})
            } else {
                callback({message: false})
            }
        }
    });
};