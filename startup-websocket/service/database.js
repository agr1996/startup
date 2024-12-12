const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('Startup');
const userCollection = db.collection('user');
const svgCollection = db.collection('svg');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

function getUser(username) {
  return userCollection.findOne({ username: username });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function createUser(username, email, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = { username: username, email: email, password: passwordHash, token: uuid.v4() };
  await userCollection.insertOne(user);

  return user;
}

async function saveSVG(token, svg) {
  const svgDoc = { _id: token, svg: svg };
  await svgCollection.replaceOne({ _id: token }, svgDoc, { upsert: true });
}

const emptySVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"></svg>';

async function getSVG(token) {
  try {
    rec = await svgCollection.findOne({ _id: token });
    //console.log('rec', rec);
    if (rec && rec.svg) return rec.svg;
    //console.log('what?');
    return emptySVG;
  }
  catch (ex) {
    //console.log(ex);
    return emptySVG;
  }
}

module.exports = {
  getUser,
  getUserByToken,
  createUser,
  saveSVG,
  getSVG
};
