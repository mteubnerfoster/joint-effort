const User = require('./user');
const SearchHistory = require('./searchHistory');


SearchHistory.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(SearchHistory)

module.exports = { User, SearchHistory };
