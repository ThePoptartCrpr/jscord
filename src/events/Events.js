const Message = require('../structures/message/Message.js');

class Events {
  fire(evt) {
    let event = JSON.parse(evt.data).t;
    if (event === 'MESSAGE_CREATE') {
      let data = JSON.parse(evt.data).d;
      let message = new Message(data);
      console.log(message.content);
    }
  }
}

module.exports = Events;
