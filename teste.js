import { MongoDbConnection } from "./database/mongoDB/connection/connect.js";

const connectionDb = new MongoDbConnection();

connectionDb.connectDb();

