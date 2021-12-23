const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Strain extends Model {}

Strain.init(
  {
   strain_name: {
     type: DataTypes.STRING,
     allowNull: false
   },
   dateCreated: {
     type: DataTypes.DATE,
     defaultValue: Date.now
   },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    product_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'product',
          key: 'id'
        }
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'strain',
  }
);

module.exports = Strain;