const loginModel = require('./login-model');

exports.doLogin = async(request, reply) => {
  const query = {
    admin: true
  }

  const data = await loginModel.find(query);

  return reply.response(data);
};