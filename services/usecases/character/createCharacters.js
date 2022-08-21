import { CharacterEntity } from "../../../Entities/CharacterEntity";

export class CreateCharacterUseCase {
  constructor(characterRepository) {
    this.repository = characterRepository;
  }

  execute(character) {
    const newCharacter = new CharacterEntity(character)
    return await this.repository.create(newCharacter.getCharacter())
  }
}