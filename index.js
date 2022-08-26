import express from 'express';
import cors from 'cors';

import { MongoDbConnection } from './database/mongoDB/connection/connect.js';
import makeUsers from './factories/user.js';
import makeCharacter from './factories/character.js';

const connectionDb = new MongoDbConnection();
connectionDb.connectDb();

const app = express();
const router = express.Router();

const characters = makeCharacter(router);
const user = makeUsers(router);

app.use(cors());
app.use(express.json());

app.use('/characters', characters.route());
app.use('/users', user.route());

app.listen(3000, () => {
  console.log('Server listen in: http://localhost:3000');
});
