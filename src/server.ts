import express, { type Request, type Response } from 'express';
import Database from './database';
import AppConfig from '../config';

const { sequelize: { models: { rishabh: User } } } = Database;

const { PORT } = AppConfig;
const app = express();

app.use(express.json());

app.get('/', async (req: Request, res: Response) => {
  const users = await User.findAll();

  res.json(users);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
