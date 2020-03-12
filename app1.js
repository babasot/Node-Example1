//Dependencias de node
const http= require('http');
const path = require('path');
const os = require('os');
const fs = require('fs');
//Importación de modulos
const hostname= require('./server');
const port= require('./server');
const log = require('./logger');
//Parse filename
var pathObj = path.parse(__filename);
//OS
var totalMemory = os.totalmem();
var freeMemory = os.freemem();
//Bloquing or Non-Bloquing / synchronous or asynchronous
const files = fs.readdirSync('./');
//Inicia server
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/pain');
    res.end('Lets take a look!!');
});
//Servidor anda
server.listen(port, hostname, ()=>{
    log(`Servidor running at http://${hostname}:${port}/`);
    //log(__filename);
    log(pathObj);
    log(__dirname)
    log(`Total Memory: ${totalMemory}`);
    log(`Free Memory: ${freeMemory}`);
    log(`Reas Files Sync: ${files}`);
});