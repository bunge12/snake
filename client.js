const net = require('net');
const { IP, PORT } = require('./constants');

/**
 * Establishes connection with the game server
 */
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('connect', () => {
    conn.write("Name: ART");
    /*     setInterval(() => {
          conn.write("Move: up")
        }, 50); */
    console.log('Connected to game server');
  });
  conn.on('data', (data) => {
    console.log('Server says: ' + data);
  });
  return conn;
}

module.exports = connect;