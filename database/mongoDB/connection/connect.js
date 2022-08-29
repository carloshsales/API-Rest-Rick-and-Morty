// import { config } from 'dotenv';
import { mongoose } from 'mongoose';

// config();

export class MongoDbConnection {
  async connectDb() {
    await mongoose.connect(process.env.MONGODB_URI);
  }
}
