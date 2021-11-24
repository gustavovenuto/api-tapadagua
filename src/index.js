const express = require('express');

const http = require('http');
const routes = require('./api/routes/usersRoutes.js');
const { O_NOATIME } = require('constants');

const app = express();

app.set('porta', 3333);
app.set('url', 'http://localhost:');

app.use(express.json());
app.use(routes);

http.createServer(app).listen(app.get('porta'), function(){
    console.log('servidor Rodando em ' + app.get('url') + app.get('porta'));
})