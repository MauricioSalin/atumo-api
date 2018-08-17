module.exports.find = (query) =>
  new Promise(async(resolve, reject) => {
    const callbackReturned = function(err, data) {
      if(err) {
        return reject(err)
      }
      return resolve(data);
    };

    global.db.collection('credential', (err, collection) => {
      if(err) {
        console.error('ERROR -> ', err);
      }

      collection.find(query).toArray(callbackReturned);
    });
  });