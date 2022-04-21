require('dotenv').config()
module.exports = {
  development: {
    database: 'notsobestbuyback-end',
    dialect: 'postgres'
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