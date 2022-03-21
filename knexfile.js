"use strict";
/*eslint no-undef: 0*/

module.exports = {

  development: {
    client: "pg",
    connection: {
      database: "code_mining-dev",
      host: "localhost"
    }
  },

  test: {
    client: "pg",
    connection: {
      database: "code_mining-test",
      host: "localhost",
    }
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
      ssl: {
    rejectUnauthorized: false
  }
  }
};
