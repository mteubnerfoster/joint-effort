// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class Product extends Model { }

// Product.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     choice: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     dateCreated: {
//       type: DataTypes.DATE,
//       defaultValue: Date.now
//     },
//     category_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: 'category',
//         key: 'id'
//       }
//     },
//     strain_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: 'strain',
//         key: 'id'
//       }
//     }
//   },
//   {
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'product',
//   }
// );

// module.exports = Product;