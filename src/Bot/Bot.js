const websocket = require('../api/websocket/WebSocket.js');
const logger = require('../util/Logger.js');
const Logger = new logger();

const EventEmitter = require('events');
let WebSocket;

/**
 * This is the core bot object that you will use to connect to just about anything related to Discord.
 */
class Bot extends EventEmitter {
  /**
   * @param {string} token Your bot account's token
   */
  constructor(token) {
    super();
    this.token = token;
    WebSocket = new websocket(this);
  }
  
  /**
   * Connects to Discord using your bot account
   * @return {Promise}       
   */
  connect() {
    return new Promise((resolve, reject) => {
      if (typeof this.token != "string") reject(new Error("Invalid token"));
      WebSocket.connect(this.token, resolve, reject);
    }).catch(e => {
      return Promise.reject(e);
    })
  }
  
  /**
   * Logs a message to console with a timestamp. An alias for Logger#log() if you don't want to create a {@link Logger} object.
   * @param  {string} obj The message you're logging to console
   * @return {void}     
   * @example
   * const mybot = new jscord.Bot(token);
   * mybot.log("message");
   */
  log(obj) {
    return Logger.log(obj);
  }
  
  /**
   * Logs an error to console with a timestamp. An alias for Logger#error() if you don't want to create a {@link Logger} object.
   * @param  {string} obj The error you're logging to console
   * @return {void}     
   * @example
   * const mybot = new jscord.Bot(token);
   * mybot.log(error);
   */
  error(obj) {
    return Logger.error(obj);
  }
  
}

module.exports = Bot;
