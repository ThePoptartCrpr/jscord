const Message = require('../structures/message/Message.js');

class Events {
  constructor(bot) {
    this.bot = bot;
  }
  
  fire(evt) {
    let event = JSON.parse(evt.data).t;
    if (event === 'READY') {
      this.bot.emit('ready');
    }
    else if (event === 'MESSAGE_CREATE') {
      let data = JSON.parse(evt.data).d;
      let message = new Message(data);
      this.bot.emit('message', message)
    }
  }
}

/**
 * Emitted when the bot is ready.
 * @event Bot#ready
 */

/**
 * Emitted when a message is created.
 * @event Bot#message
 * @param {Message} message The message that was created
 */

module.exports = Events;
