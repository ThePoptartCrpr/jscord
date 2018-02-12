const moment = require('moment');
const chalk = require('chalk');

class Logger {
  log(obj) {
    console.log(`[${moment().format('MM-DD-YYYY HH:mm:ss')}] ${obj}`);
  }
  
  error(obj) {
    console.log(chalk.bgRed(`[ERROR ${moment().format('MM-DD-YYYY HH:mm:ss')}]`) + ` ${obj}`);
  }
}

module.exports = Logger;
