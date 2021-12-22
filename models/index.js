const User = require('./User');
const Strain = require('./Strain');
const Category = require('./Category');
const Product = require('./Product');

User.hasMany(Category, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Category.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.belongsTo(Category, {
  foreignKey: 'category_id'
})

Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE'
});

Product.belongsTo(Strain, {
  foreignKey: 'user_id',
});

Strain.hasMany(Product, {
  foreignKey: 'user_id'
});

module.exports = { User, Strain, Category, Product };