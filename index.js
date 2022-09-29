'use strict';

require('dotenv').config();
// const { application } = require('express');
const app = require('./auth-server/src/server.js');
const { db } = require('./auth-server/src/auth/models');

db.sync().then(() => {
  console.log('connected to db!');  
  app.start(process.env.PORT || 3002);
});
