let connection;

const handleUserInput = (input) => {
  if (input === '\\q\n' || input === '\u0003') {
    process.exit();
  }
  if (input === '\u0008') {
    connection.write("Say: hola amigos!");
  }
  if (input === 'w' || input === 'W') {
    connection.write("Move: up");
  }
  if (input === 'a' || input === 'A') {
    connection.write("Move: left");
  }
  if (input === 's' || input === 'S') {
    connection.write("Move: down");
  }
  if (input === 'd' || input === 'D') {
    connection.write("Move: right");
  }
};

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (data) => {
    handleUserInput(data);
  });
  return stdin;
};

module.exports = setupInput;