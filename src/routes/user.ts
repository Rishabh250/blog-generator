import { Router } from 'express';
import userController from '../controllers/user';

export class UserRoutes {
  public router: Router;

  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    const { create, getList, getDetailsById, update } = userController;

    this.router.post('/user', create);
    this.router.get('/users', getList);
    this.router.get('/user', getDetailsById);
    this.router.put('/user', update);
  }
}
