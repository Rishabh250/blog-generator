import express, { Application } from 'express';
import routes from './routes';
import { responseMiddleware } from './middleware/response-handlers';

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.setMiddlewares();
    this.setRoutes();
    this.start();
  }

  private setMiddlewares(): void {
    this.app.use(express.json());
    this.app.use(responseMiddleware);
  }

  private setRoutes(): void {
    this.app.use('/v1/users', routes);
  }

  private start(): void {
    const port = process.env.PORT || 3000;

    // eslint-disable-next-line no-console
    this.app.listen(port, () => console.log(`Server running on port ${port}`));
  }
}

new App();
