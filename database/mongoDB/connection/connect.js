import { config } from 'dotenv';
import { mongoose } from 'mongoose';

if (process.env.NODE_ENV !== 'production') {
  config();
}

export class MongoDbConnection {
  async connectDb() {
    if (await mongoose.connect(process.env.MONGODB_URI));
    console.log('Connected to MongoDB');
  }
}
