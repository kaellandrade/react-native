const express = require('express');
const APP = express();
const db = require('./config/db');
const consign = require('consign');

consign()
    .include('./config/passport.js')
    .then('./config/middlewares.js')
    .then('./api')
    .then('./config/routes.js')
    .into(APP)

APP.db = db;

APP.listen(3000, _ => {
    console.log('Backend executando...')
});