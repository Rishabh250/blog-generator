import { IUserService, IUserCreate } from "../interfaces";
import Container, { Service as DIService } from "typedi";
import Helpers from "../utils/helpers";
import Database from "../database";

@DIService()
class UserServices implements IUserService {
  private helpers: Helpers;
  private userModel;
  private basicProfileModel;
  private sequelize;

  constructor() {
    this.helpers = Container.get(Helpers);
    const { sequelize }= Database;
    const { models: { user, basic_profile: basicProfile } } = sequelize;

    this.userModel = user;
    this.basicProfileModel = basicProfile;
    this.sequelize = sequelize;
  }

  public  create = async (payload: IUserCreate) => {

    const { firstName, lastName, email, password, userId } = payload;

    const user = await this.userModel.findOne({ where: { email } });

    if (user) {
      return { errors: [ { name: 'user', message: 'User already exists' } ] };
    }

    const { salt, hash }: HashPassword = this.helpers.hashPassword(password);
    const passwordValidity = this.helpers.generateValidityDate(90);

    const transaction = await this.sequelize.transaction();

    const response = await this.userModel.create({
      first_name: firstName,
      last_name: lastName,
      email,
      hashed_password: hash,
      salt,
      password_validity: passwordValidity,
      created_by: userId,
      updated_by: userId,
    }, { transaction });

    if (!response) {
      return { errors: [ { name: 'user', message: 'User not created' } ] };
    }

    const { dataValues: { public_id: publicId } } = response;

    const profile = await this.basicProfileModel.create({
      user_id: publicId,
      first_name: firstName,
      last_name: lastName,
      name: `${firstName} ${lastName}`,
      email,
      created_by: userId || publicId,
      updated_by: userId || publicId,
    }, { transaction });

    if (!profile) {
      await transaction.rollback();

      return { errors: [ { name: 'user', message: 'User not created' } ] };
    }

    await transaction.commit();

    return { doc: { publicId } };
  }

  public  getList = async (payload: object) => {
    return { doc: payload };
  }

  public  getDetailsById = async (payload: object) => {
    return { doc: payload };
  }

  public  update = async (payload: object) => {
    return { doc: payload };
  }
}

export default UserServices;