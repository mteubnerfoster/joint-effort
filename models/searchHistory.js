const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class SearchHistory extends Model { }

SearchHistory.init(
  {
    truck_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dispensary_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
      },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'search_history',
  }
);

module.exports = SearchHistory;