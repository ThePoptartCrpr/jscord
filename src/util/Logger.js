const moment = require('moment');
const chalk = require('chalk');

/**
 * Utility class to help streamline the process of logging information to console.
 */
class Logger {
  /**
   * Logs a message to console with a timestamp.
   * @param  {string} obj The message you're logging to console
   * @return {void}     
   */
  log(obj) {
    console.log(`[${moment().format('MM-DD-YYYY HH:mm:ss')}] ${obj}`);
  }
  
  /**
   * Logs an error to console with a timestamp.
   * @param  {string} obj The error you're logging to console
   * @return {void}     
   */
  error(obj) {
    console.log(chalk.bgRed(`[ERROR ${moment().format('MM-DD-YYYY HH:mm:ss')}]`) + ` ${obj}`);
  }
}

module.exports = Logger;
