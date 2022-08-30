import { authetication } from '../middleware/auth.js';
import { verifyEmailCreate } from '../middleware/emailVerifyCreateUser.js';

export class UserRoutes {
  constructor(controller, router) {
    this.userController = controller;
    this.router = router;
  }

  route() {
    this.router.get('/', authetication, (req, res) =>
      this.userController.find(req, res)
    );
    this.router.post('/create', verifyEmailCreate, (req, res) =>
      this.userController.create(req, res)
    );
    this.router.patch('/update/:id', authetication, (req, res) =>
      this.userController.update(req, res)
    );
    this.router.delete('/delete/:id', authetication, (req, res) =>
      this.userController.delete(req, res)
    );
    this.router.get('/:id', authetication, (req, res) =>
      this.userController.findById(req, res)
    );

    return this.router;
  }
}
