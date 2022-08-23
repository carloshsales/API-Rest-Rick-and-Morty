import { characterModel } from "../mongoDB/schemas/characterSchema.js";

export class CharacterRepository {

  async create(character) {
    return await characterModel.create(character);
  }

  async update(character, characterId) {
    return await characterModel.findOneAndUpdate({ id: characterId }, character, { new: true });
  }

  async delete(characterId) {
    return await characterModel.findByIdAndDelete(characterId);
  }

  async findById(characterId) {
    return await characterModel.findById(characterId);
  }

  async findAll() {
    return await characterModel.findAll();
  }

  async findByName(characterName) {
    return await characterModel.find({ name: characterName });
  }

}