const User = require('./User');
const Strain = require('./Strain');
const Category = require('./Category');
const Product = require('./Product');

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
