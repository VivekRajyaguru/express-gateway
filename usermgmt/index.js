var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var mongoose = require('mongoose');
var readRoutes = require('./routes/read_routes');
var postRoutes = require('./routes/post_routes');
var adminRoutes = require('./routes/admin_routes');
var commonRoutes = require('./routes/common_routes');
var app = express();

const options = {
    autoIndex: false,
    reconnectTries: 30, 
    reconnectInterval: 500,
    poolSize: 10,
    bufferMaxEntries: 0,
    useNewUrlParser: true,
};


/* const connectWithRetry = () => {
    mongoose.connect("mongodb://localhost:27017/testDb", options).then(()=>{
    console.log('MongoDB is connected')
    }).catch(err=>{
    console.log('MongoDB connection unsuccessful, retry after 5 seconds.', err)
    setTimeout(connectWithRetry, 5000)
    })
};

connectWithRetry(); */

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

app.use((req, res, next) => {
    next();
    /* var header = req.headers['Authorization'];
    if (header) {
        next();
    } else {
        res.send('Not Authorized');
    } */
});

app.use('/get', readRoutes);
app.use('/post', postRoutes);
app.use('/admin', adminRoutes);
app.use('/common', commonRoutes);
app.get('/', (req, res) => {
    res.json({statusCode:200, body: 'OK'});
});
app.get('/systems/1', (req, res) => {
    res.json({statusCode:200, body: 'OK'});
});
var server = http.createServer(app);
server.listen(8000);
