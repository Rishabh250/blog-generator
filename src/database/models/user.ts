import { Sequelize, Model, DataTypes } from 'sequelize';

interface UserAttributes {
    public_id: string;
    name: string;
    email: string;
    password: string;
}

interface UserInstance extends Model<UserAttributes>, UserAttributes {}

export default  (sequelize: Sequelize) => {
  const User = sequelize.define<UserInstance>('rishabh', {
    public_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },{ freezeTableName: true, underscored: true, timestamps: true }
  );

  return User;
};


