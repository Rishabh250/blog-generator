import { Request, Response } from 'express'

class UserController {
  public create = async (req: Request, res: Response) => {
    return res.status(201).json({ message: 'User created' });
  }

  public getList =async  (req: Request, res: Response) => {
    return res.status(200).json({ message: 'List of users' });
  }

  public getDetailsById = async (req: Request, res: Response) => {
    return res.status(200).json({ message: 'User details' });
  }

  public update = async (req: Request, res: Response) => {
    return res.status(200).json({ message: 'User updated' });
  }
}

const userController = new UserController();

export default userController;
