import { userModel } from '../mongoDB/schemas/userSchema.js';

export class UserRepository {
  async create(userData) {
    return await userModel.create(userData);
  }

  async update(userData, userId) {
    return await userModel.findOneAndUpdate({ id: userId }, userData, {
      new: true,
    });
  }

  async delete(userId) {
    return await userModel.findByIdAndDelete(userId);
  }

  async findById(userId) {
    return await userModel.findById(userId);
  }

  async findAll() {
    return await userModel.find();
  }
}
