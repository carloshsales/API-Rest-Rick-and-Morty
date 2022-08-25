export class FindCharactersByIdUseCase {
  constructor(characterRepository) {
    this.repository = characterRepository;
  }

  async execute(characterId) {
    return await this.repository.findById(characterId);
  }
}
