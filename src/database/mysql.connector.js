/**
* generates pool connection to be used throughout the app
*/
require("dotenv").config();
const { createPool, createConnection } = require("mysql");

let pool
const init = () => {
  try {
    pool = createPool({
      connectionLimit: process.env.MY_SQL_DB_CONNECTION_LIMIT
        ? parseInt(process.env.MY_SQL_DB_CONNECTION_LIMIT)
        : 4,
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE
    });
    // console.debug('MySql Adapter Pool generated successfully');
  } catch (error) {
    // console.error("[mysql.connector][init][Error]: ", error);
    throw new Error("failed to initialized pool");
  }
};
/**
 * executes SQL queries in MySQL db
 *
 * @param {string} query - provide a valid SQL query
 * @param {string[] | object} params - provide the parameterized values used
 * @return {Promise} Returns a promise of the same type as the provided model type in the query
 * 
 */
const execute = (
  query = String,
  params,
) => {
  try {
    if (!pool)
      throw new Error(
        "Pool was not created. Ensure pool is created when running the app."
      );

    return new Promise((resolve, reject) => {
      pool.query(query, params, (error, results) => {
        if (error) reject(error);
        else resolve(results);
      });
    });
  } catch (error) {
    // console.error("[mysql.connector][execute][Error]: ", error);
    throw { value: error.message, message: error.message, param: 'inpur' }
  }
};

/**
 * closes the connection
 */
const end = () => {
  pool.end(function (err) {
    if (err) {
      return // console.log("error:" + err.message);
    }
  });
}

module.exports = {
  init,
  execute,
  end
}