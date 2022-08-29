import express from 'express';
import cors from 'cors';

//MONGO | FACTORIES
import { MongoDbConnection } from './database/mongoDB/connection/connect.js';
import makeUserFactory from './factories/user.js';
import makeCharacterFactory from './factories/character.js';
import makeAuthFactory from './factories/auth.js';

//SWAGGER IMPORT
import swaggerUi from 'swagger-ui-express';
import { swaggerDocumentation } from './swagger.js';

const connectionDb = new MongoDbConnection();
connectionDb.connectDb();

const app = express();
const router = express.Router();

const characters = makeCharacterFactory(router);
const user = makeUserFactory(router);
const auth = makeAuthFactory(router);

app.use(cors());
app.use(express.json());

app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocumentation, {
    swaggerOptions: {
      validatorUrl: null
    }
  })
);
app.use('/auth', auth.route());
app.use('/characters', characters.route());
app.use('/users', user.route());

app.listen(3000, () => {
  console.log('Server listen in: http://localhost:3000');
});
