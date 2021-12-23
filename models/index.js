const User = require('./User');
const Strain = require('./Strain');
const Category = require('./Category');
const Product = require('./Product');

// Working on these still 
User.hasMany(Category, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Category.belongsTo(User, {
  foreignKey: 'user_id'
});

Product.belongsTo(Category, {
  foreignKey: 'category_id'
})

Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE'
});

Product.belongsTo(Strain, {
  foreignKey: 'product_id',
});

Strain.hasMany(Product, {
  foreignKey: 'product_id'
});

module.exports = { User, Strain, Category, Product };
