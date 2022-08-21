import { randomUUID } from 'node:crypto'

export class CharacterEntity {
  constructor(character, userId) {
    this.id = randomUUID();
    this.name = character.name;
    this.image = character.image;
    this.userId = userId;
  }

  getCharacter() {
    return {
      name: this.name,
      image: this.image,
      userId: this.userId
    }
  }
}