const http= require('http');
const path = require('path');

const hostname= require('./server');
const port= require('./server');
const log = require('./logger');

var pathObj = path.parse(__filename);

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/pain');
    res.end('Lets take a look!!');
});

server.listen(port, hostname, ()=>{
    log(`Servidor running at http://${hostname}:${port}/`);
    //log(__filename);
    log(pathObj);
    log(__dirname)
});