const jscord = require('../');
const Logger = new jscord.Logger();

Logger.log("e" + "asdf");

try {
  fart.fart;
} catch(e) {
  Logger.error(e);
}
