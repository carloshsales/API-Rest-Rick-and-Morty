import { userModel } from '../mongoDB/schemas/userSchema'

export class UserRepository {
  async create(user) {
    return await userModel.create(user);
  }

  async findAll() {
    return await userModel.findAll();
  }
}