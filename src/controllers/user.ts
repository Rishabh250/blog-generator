import { Service } from 'typedi';
import { Request, Response } from 'express'
import UserSchema from '../validation/user';
import { IUserController } from 'src/interfaces/IUserController';

const { createSchema } = UserSchema;

@Service()
class UserController implements IUserController {
  public create = async (req: Request, res: Response) => {
    try {
      const { body, user: { userId = '' } = {} } = req as Request;
      const data = { ...body, userId };

      const { error } = createSchema.create.validate(data);

      if (error) {
        const { details } = error;

        return res.badRequest(details);
      }

      return res.postRequest();
    }
    catch (error) {
      return res.serverError();
    }
  }

  public getList =async  (req: Request, res: Response) => {
    return res.getRequest({ message: 'User list' });
  }

  public getDetailsById = async (req: Request, res: Response) => {
    return res.status(200).json({ message: 'User details' });
  }

  public update = async (req: Request, res: Response) => {
    return res.status(200).json({ message: 'User updated' });
  }
}

export default UserController;
