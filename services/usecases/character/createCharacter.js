import { CharacterEntity } from '../../../Entities/CharacterEntity.js';

export class CreateCharacterUseCase {
  constructor(characterRepository) {
    this.repository = characterRepository;
  }

  async execute(character) {
    const newCharacter = new CharacterEntity(character);
    return await this.repository.create(newCharacter.getCharacter());
  }
}
