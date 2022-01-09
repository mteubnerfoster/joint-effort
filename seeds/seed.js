const sequelize = require('../config/connection');
const { User, SearchHistory, } = require('../models');

const userData = require('./userData.json');
const searchHistoryData = require('./search_history.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const search of searchHistoryData) {
    await SearchHistory.create({
      ...search,
    });
  }

  process.exit(0);
};

seedDatabase();
