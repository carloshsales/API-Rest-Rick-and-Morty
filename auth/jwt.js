import jwt from 'jsonwebtoken';
import { config } from 'dotenv';

config();

export class JwtHelper {
  generateToken(data) {
    const token = jwt.sign({ data }, process.env.SECRET, { expiresIn: '6h' });
    return token;
  }

  verifyToken(token) {
    const data = jwt.verify(token, process.env.SECRET);
    return data;
  }
}
