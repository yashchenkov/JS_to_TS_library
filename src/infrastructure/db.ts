import mongoose from 'mongoose';
const UrlDB = 'mongodb://root:example@mongo:27017/'

mongoose.connect(UrlDB)

export const db = mongoose.connection;
db.on('open', () => {
  console.log('Connected to mongodb');
})