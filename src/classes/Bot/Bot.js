const websocket = require('../api/websocket/WebSocket.js');
const WebSocket = new websocket();

/**
 * This is the core bot object that you will use to connect to just about anything related to Discord.
 */
class Bot {
  /**
   * @param {string} token Your bot account's token
   */
  constructor(token) {
    this.token = token;
  }
  
  /**
   * Connects to Discord using your bot account
   * @return {Promise}       
   */
  connect() {
    return new Promise((resolve, reject) => {
      if (typeof this.token != "string") throw "Invalid token";
      WebSocket.connect(this.token, resolve, reject);
    }).catch(e => {
      return Promise.reject(e);
    })
  }
  
}

module.exports = Bot;
