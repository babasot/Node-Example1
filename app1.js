//Dependencias de node
const http= require('http');
const path = require('path');
//Importación de modulos
const hostname= require('./server');
const port= require('./server');
const log = require('./logger');
//Parse filename
var pathObj = path.parse(__filename);
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
});