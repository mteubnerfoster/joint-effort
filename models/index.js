const User = require('./user');
const Strain = require('./strain');
const Category = require('./category');
const Product = require('./product');
const SearchHistory = require('./searchHistory');

// Working on these still 

Category.hasMany(Product);
Product.belongsTo(Category, {
  foreignKey: 'category_id'
})

Strain.hasMany(Product);
Product.belongsTo(Strain, {
  foreignKey: 'strain_id',
});

SearchHistory.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(SearchHistory, {
  foreignKey: 'user_id',
});
module.exports = { User, Strain, Category, Product, SearchHistory };
