import { QueryInterface, DataTypes } from 'sequelize';

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable('basic_profile', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      public_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      user_id: {
        type: DataTypes.UUID,
        allowNull: false,
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
        unique: true
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
        type: DataTypes.ENUM('active', 'inactive'),
        defaultValue: 'inactive'
      },
      subscription_validity: {
        type: DataTypes.DATE
      },
      created_by: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'user',
          key: 'public_id'
        }
      },
      updated_by: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'user',
          key: 'public_id'
        }
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    });
  },
  down: async (queryInterface: QueryInterface) => await queryInterface.dropTable('basic_profile'),
}