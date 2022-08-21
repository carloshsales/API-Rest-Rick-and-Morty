export class GetUserUseCase {
  constructor(userRepository) {
    this.repository = userRepository;
  }

  async execute(user) {
    return await this.repository.get(user)
  }
}