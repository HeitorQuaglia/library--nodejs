const express = require('express');
const chalk = require('chalk');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(morgan('combined'));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'views' ,'index.html'));
});

app.listen(3000, function(){
    console.log('LISTENIN ON PORT: ' + chalk.green(3000) );
});