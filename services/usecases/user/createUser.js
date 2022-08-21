import { UserEntity } from "../../../Entities/UserEntity";

export class CreateUserUseCase {
  constructor(userRepository) {
    this.repository = userRepository;
  }
  async execute(user) {
    const newUser = new UserEntity(user);
    newUser.validate();
    return await this.repository.save(newUser.getUser());
  }
}