import { Request as ExpressRequest, Response } from 'express'
import UserSchema from '../validation/user';

const { createSchema } = UserSchema;

interface Request extends ExpressRequest {
  user: {
    userId: string;
  };
}

class UserController {
  public create = async (req: ExpressRequest, res: Response) => {
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

  public getList =async  (req: ExpressRequest, res: Response) => {
    return res.getRequest({ message: 'User list' });
  }

  public getDetailsById = async (req: ExpressRequest, res: Response) => {
    return res.status(200).json({ message: 'User details' });
  }

  public update = async (req: ExpressRequest, res: Response) => {
    return res.status(200).json({ message: 'User updated' });
  }
}

const userController = new UserController();

export default userController;
