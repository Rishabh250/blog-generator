import express, { type Request, type Response } from 'express';
import Database from './database';
import AppConfig from '../config';

const { sequelize: { models: { user: User } } } = Database;

const { PORT } = AppConfig;
const app = express();

app.use(express.json());

app.get('/', async (req: Request, res: Response) => {
  try {
    const users = await User.findAndCountAll();

    res.json(users);
  }
  catch (error) {
    res.status(500).json({ error });
  }
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${PORT}`);
});
