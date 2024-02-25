import { Router } from 'express';
import { UserRoutes } from './user';

class Routes {
  private router: Router = Router();
  private userRoutes: UserRoutes = new UserRoutes();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    const { router: userRoutes } = this.userRoutes;

    this.router.use(userRoutes);
  }

  public getRouter(): Router {
    return this.router;
  }
}

const routes = new Routes().getRouter();

export default routes;
