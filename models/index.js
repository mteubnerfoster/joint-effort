const User = require('./user');
const Strain = require('./strain');
const Category = require('./category');
const Product = require('./product');

// Working on these still 

Category.hasMany(Product);
Product.belongsTo(Category, {
  foreignKey: 'category_id'
})

Strain.hasMany(Product);
Product.belongsTo(Strain, {
  foreignKey: 'strain_id',
});

module.exports = { User, Strain, Category, Product };
