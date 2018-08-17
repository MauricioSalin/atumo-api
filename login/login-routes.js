const controller = require('./login-controller');

module.exports = [
  {
    method: 'GET',
    path: '/login',
    handler: controller.doLogin
  }
]