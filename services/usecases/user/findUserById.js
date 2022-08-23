export class FindUserByIdUseCase {
  constructor(userRepository) {
    this.repository = userRepository;
  }

  async execute(userId) {
    return await this.repository.findById(userId);
  }
}