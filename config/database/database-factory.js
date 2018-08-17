const mongo = require('mongodb');
const mongo_client = mongo.MongoClient;

const { url } = require('./database.settings');

exports.initializeDatabase = async() => 
  new Promise((resolve, reject) => {
    mongo_client.connect(url)
      .then(database => {
        global.db = database.db('admin');
        return resolve();
      })
      .catch(err => {
        console.log(err);
        return reject(err);
      })
  });

