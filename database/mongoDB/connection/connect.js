import { mongoose } from 'mongoose';
// import { config } from 'dotenv';

// config();

export class MongoDbConnection {
  async connectDb() {
    await mongoose.connect(process.env.MONGODB_URI);
  }
}
