// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class Strain extends Model { }

// Strain.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     strain_name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true
//     },
//     dateCreated: {
//       type: DataTypes.DATE,
//       defaultValue: Date.now
//     },
//   },
//   {
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'strain',
//   }
// );

// module.exports = Strain;