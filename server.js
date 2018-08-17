'use strict';

const hapi = require('hapi');
const routes = require('./routes');
const { initializeDatabase } = require('./config/database/database-factory');

const server = hapi.Server({
  port: 5000
});

server.route(routes);

const init = async() => {
  await initializeDatabase()
  await server.start();
  console.log('SERVER RUNNING ON PORT 5000');
};

init();