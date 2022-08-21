export class UpdateCharacterUseCase {
  constructor(characterRepository, findByIdCharacter) {
    this.repository = characterRepository;
    this.findByIdCharacter = findByIdCharacter;
  }

  async execute(characterId, characterUpdate) {
    const characterToUpdate = await this.findByIdCharacter.execute(characterId);
    const characterModified = Object.assign(characterToUpdate, characterUpdate);
    const characterUpdated = new CharacterEntity(characterModified);

    return await this.repository.updateCharacter(characterUpdated.getCharacter());
  }
} 