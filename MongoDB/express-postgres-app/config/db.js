import { Sequelize } from "sequelize";

const sequelize = new Sequelize('express-postgres-app', 'postgres', ' 1', {
  host: 'localhost',
  dialect: 'postgres'
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Postgre DB connected successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error.message);
  }

}

const syncDatabase = async () => {
  try {
    await sequelize.sync({ force: false });
    console.log('DB synced successfully.');
  } catch (error) {
    console.error('Taz hujnja ne se sync-na: ', error.message);
  }
}

export {
  sequelize,
  connectDB,
  syncDatabase
}