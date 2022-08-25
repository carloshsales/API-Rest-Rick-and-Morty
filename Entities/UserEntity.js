import { randomUUID } from 'node:crypto';
import { CharacterEntity } from './CharacterEntity.js';

export class UserEntity {
  constructor(user) {
    this.id = user.id ?? randomUUID();
    this.name = user.name;
    this.password = user.password;
    this.email = user.email;
    this.image = user.image;
    this.characters = user.characters ?? [];
  }

  validate() {
    if (!this.name) throw new Error('Undefined name');
    if (!this.password) throw new Error('Undefined password');
    if (!this.email) throw new Error('Undefined email address');
    if (!this.image) throw new Error('Undefined image');
  }

  addCharacter(character) {
    const newCharacter = new CharacterEntity(character, this.id);

    return this.characters.push(newCharacter.getCharacter());
  }

  getUser() {
    return {
      id: this.id,
      name: this.name,
      password: this.password,
      email: this.email,
      image: this.image,
    };
  }
}
