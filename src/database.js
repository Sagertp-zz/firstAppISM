import MongoClient from 'mongodb';

export async function connect () {
  try {
    const client = await MongoClient.connect('mongodb://172.16.0.252:27017', {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }),
      db = client.db('node-restapi');
      console.log('DB is Connected');
      return db;
  } catch (e) {
    console.log(e);
  }
}

