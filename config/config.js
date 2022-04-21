require('dotenv').config()
module.exports = {
  development: {
    database: 'notsobestbuy',
    dialect: 'postgres',
    password: "MadWizard1508!"
  },
  test: {
    database: 'notsobestbuytest',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}