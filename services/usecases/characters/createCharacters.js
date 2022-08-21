import { CharacterEntity } from "../../../Entities/CharacterEntity";

export class CreateCharacterUseCase {
  constructor(characterRepository) {
    this.repository = characterRepository;
  }

  execute(character) {
    const newCharacter = new CharacterEntity(character)
    await this.repository.save(newCharacter.getCharacter());

    return newCharacter.getCharacter();
  }
}