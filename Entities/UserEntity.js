import { randomUUID } from 'node:crypto';
// import { CharacterEntity } from './CharacterEntity.js';

export class UserEntity {
  constructor(user) {
    // console.log('CONSTRUCTOR', user);
    this.id = user.id ?? randomUUID();
    this.name = user.name;
    this.password = user.password;
    this.email = user.email;
    this.image = user.image;
  }

  validate() {
    if (!(this.name || this.password || this.email || this.image))
      throw new Error('Invalid User!');
  }

  // addCharacter(character) {
  //   const newCharacter = new CharacterEntity(character, this.id);

  //   return this.characters.push(newCharacter.getCharacter());
  // }

  getUser() {
    // console.log(this);
    return {
      id: this.id,
      name: this.name,
      password: this.password,
      email: this.email,
      image: this.image
    };
  }
}
