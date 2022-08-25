import express, { json, Router } from 'express';
import cors from 'cors';

import { MongoDbConnection } from './database/mongoDB/connection/connect.js';
import makeUsers from './factories/user.js';
import makeCharacter from './factories/character.js';

const connectionDb = new MongoDbConnection();
connectionDb.connectDb();

const app = express();
const router = Router();

const characters = makeCharacter(router);
const user = makeUsers(router);

app.use(cors());
app.use(json());

app.use('/users', user.route());
// app.use('/characters', characters.route());

app.listen(3000, () => {
  console.log('Server listen in: http://localhost:3000');
});
