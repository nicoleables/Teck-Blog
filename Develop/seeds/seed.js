const sequelize = require("../config/connection");
const { User } = require("../models");
const userData = require("./userData.json");

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });
    // console.log("Database synced to:", process.env.DB_NAME);

    const users = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
    // console.log("Users seeded:", users);

    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();