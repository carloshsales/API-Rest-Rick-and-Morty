export class DeleteUserUseCase {
  constructor(userRepository) {
    this.repository = userRepository;
  }

  async execute(userId) {
    return await this.repository.delete(userId);
  }
}