export class CharacterEntity {
  constructor(character, userId) {
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