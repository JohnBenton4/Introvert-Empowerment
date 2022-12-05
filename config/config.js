const {
  PG_DATABASE,
  PG_HOST,
  PG_PASSWORD,
  PG_USER
} = process.env;

module.exports = 
{
  "development": {
    username: "postgres",
    password: null,
    database: "database_development",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  // test: {
  //   username: "postgres",
  //   password: null,
  //   database: "database_test",
  //   host: "127.0.0.1",
  //   dialect: "postgres"
  // },
  "production": {
    username: PG_USER,
    password: PG_PASSWORD,
    database: PG_DATABASE,
    host: PG_HOST,
    dialect: "postgres"
  }
};
