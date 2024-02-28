import { UUID } from "crypto";
import { DataTypes, Sequelize, Model } from "sequelize";

interface BasicProfileAttributes {
    public_id: UUID;
    user_id: UUID;
    first_name: string;
    last_name:string;
    name: string;
    email: string;
    mobile_number: string;
    company_name: string;
    subscription_plan: string;
    subscription_status: Enumerator;
    subscription_validity: Date;
    created_by: UUID;
    updated_by: UUID;
}

interface BasicProfileInstance extends Model<BasicProfileAttributes>, BasicProfileAttributes {}

export default ( sequelize: Sequelize) => {
  const BasicProfile = sequelize.define<BasicProfileInstance>('basic_profile', {
    public_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.UUID,
      references: {
        model: 'user',
        key: 'public_id'
      }
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    mobile_number: {
      type: DataTypes.STRING
    },
    company_name: {
      type: DataTypes.STRING
    },
    subscription_plan: {
      type: DataTypes.STRING
    },
    subscription_status: {
      type: DataTypes.ENUM('active', 'inactive')
    },
    subscription_validity: {
      type: DataTypes.DATE
    },
    created_by: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    updated_by: {
      type: DataTypes.UUID,
      allowNull: false,
    }
  },{ freezeTableName: true, underscored: true, timestamps: true })

  return BasicProfile;
}