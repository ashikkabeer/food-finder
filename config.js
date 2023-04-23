const { MongoClient} = require('mongodb');
require('dotenv').config()



async function connect(uri) {
  try {
    const client = new MongoClient(uri);
    await client.connect();
  } catch (err) {
    console.error(err);
}
}
module.exports = connect

