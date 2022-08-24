'use strict';

/*
 * [FILE] hello_server.js
 *
 * [DESCRIPTION]
 *  Lesson Node 2 - Node.jsで簡易なサーバーを実装する
 * 
 * [NOTE]
 */

const http = require('http');

require('dotenv').config();
const nodeEnv=process.env.NODE_ENV;

const hostname = '127.0.0.1';
const port = process.env.PORT;

const server = http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    response.end('<h1>こんにちは！</h1>');
    if (nodeEnv == 'development') console.log(response);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

/*
 * END OF FILE
 */