import { JwtHelper } from '../auth/jwt.js';
import { FindCharactersByIdUseCase } from '../services/usecases/character/findCharactersById.js';

export async function authentication(req, res, next) {
  try {
    const token = req.headers.authorization;
    const jwt = new JwtHelper();
    const userData = jwt.verifyToken(token.slice(7));
    const findCharactersByIdUseCase = new FindCharactersByIdUseCase();

    await findCharactersByIdUseCase.execute(userData.data.id);

    next();
  } catch (err) {
    console.log(err);
    res.status(401).send('Invalid token! User non authorized!');
  }
}
