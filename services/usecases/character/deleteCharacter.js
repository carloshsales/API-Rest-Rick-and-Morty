export class DeleteCharacterUseCase {
  constructor(characterRepository) {
    this.repository = characterRepository;
  }

  async execute(characterId) {
    const characterDeleted = await this.repository.deleteCharacter(characterId);

    if (!characterDeleted) {
      throw new Error('Character not found in repository');
    }

    return characterDeleted;
  }
}