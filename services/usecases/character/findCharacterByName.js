export class FindSearchCharacterUseCase {
  constructor(characterRepository) {
    this.repository = characterRepository;
  }

  async execute(characterName) {
    return await this.repository.findSearch(characterName);
  }
}