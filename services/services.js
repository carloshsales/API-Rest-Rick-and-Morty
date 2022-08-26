export class Services {
  constructor(
    createUseCase,
    updateUseCase,
    deleteUseCase,
    findbyIdUseCase,
    findAllUseCase
  ) {
    this.createUseCase = createUseCase;
    this.updateUseCase = updateUseCase;
    this.deleteUseCase = deleteUseCase;
    this.findbyIdUseCase = findbyIdUseCase;
    this.findAllUseCase = findAllUseCase;
  }

  async create(data) {
    return await this.createUseCase.execute(data);
  }

  async update(data, id) {
    return await this.updateUseCase.execute(data, id);
  }

  async delete(id) {
    return await this.deleteUseCase.execute(id);
  }

  async findById(id) {
    return await this.findbyIdUseCase.execute(id);
  }

  async find() {
    return await this.findAllUseCase.execute();
  }
}
