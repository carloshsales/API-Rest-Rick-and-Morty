import { UserRepository } from '../database/repository/userRepository.js';
import { FindUserByEmailUseCase } from '../services/usecases/user/findUserByEmail.js';

export async function verifyEmailCreate(req, res, next) {
  try {
    const verifyEmail = req.body.email;
    console.log(verifyEmail);
    const repository = new UserRepository();
    const findedUser = new FindUserByEmailUseCase(repository);

    await findedUser.execute(verifyEmail);
    res.status(400).send('Email in use! Pls try again');
    console.log(err);
  } catch (err) {
    next();
  }
}
