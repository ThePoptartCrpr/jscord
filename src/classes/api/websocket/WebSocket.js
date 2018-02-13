'use strict';

const websocket = require('ws');
const ws = new websocket("wss://gateway.discord.gg/?encoding=json&v=6");

class WebSocket {
  connect(token) {
    let sequence = 0;
    ws.onopen = function() {
      return;
    }
    ws.onerror = function(a) {
      process.exit(1)
    }
    ws.onclose = function(a) {
      if (a.reason === 'Authentication failed.') throw new Error("Authentication failed");
      process.exit(1)
    }
    ws.onmessage = function(a) {
      try {
        var b = JSON.parse(a.data);
        if (0 === b.op) return;
        console.log(b), sequence = b.s, 10 === b.op && (ws.send(JSON.stringify({
          op: 2,
          d: {
            token: token,
            properties: {
              
            },
            large_threshold: 50
          }
        })), setInterval(function() {
          ws.send(JSON.stringify({
            op: 1,
            d: sequence
          }))
        }, b.d.heartbeat_interval))
      } catch(a) {
        console.error(a)
      }
    }
  }
}

module.exports = WebSocket;
