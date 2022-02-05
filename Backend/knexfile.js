const { password } = require('pg/lib/defaults');

// Update with your config settings.
require('dotenv').config();




/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports= {

  development: {
    client: 'postgresql',
    connection: {
      database:process.env.DB_NAME,
      user:process.env.DB_USER,
      password:process.env.DB_PASSWORD,
    } ,
    migrations: {
      directory: './src/database/migrations',
    },
    seeds: { directory: './src/database/seeds' },
  },

  testing: {
    client: 'pg',
    connection: process.env.DB_URL,
    migrations: {
      directory: './src/database/migrations',
    },
    seeds: { directory: './src/database/seeds' },
  },

  production: {
    client: 'pg',
    connection: process.env.DB_URL,
    migrations: {
      directory: './src/database/migrations',
    },
    seeds: { directory: './src/database/seeds' },
  },

};
