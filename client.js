const net = require('net');
/**
 * Establishes connection with the game server
 */
const connect = function () {
  const conn = net.createConnection({
    host: '192.168.88.177',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('connect', () => {
    conn.write("Name: ART");
    console.log('Connected to game server');
  });
  conn.on('data', (data) => {
    console.log('Server says: ' + data);
  });
  return conn;
}

module.exports = connect;