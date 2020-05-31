const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');

const app = express();

app.use(morgan('combined'));

app.get('/', function(req, res){
    res.send('Hello from my library app');
});

app.listen(3000, function(){
    console.log('LISTENIN ON PORT: ' + chalk.green(3000) );
});