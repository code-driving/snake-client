// Stores the active TCP connection object.
let connection;
const { moves } = require("./constants");

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", (key) => {
    handleUserInput(key);
  });
  return stdin;
};

const handleUserInput = (key) => {
  if (key === `\u0003`) {
    process.exit();
  }
  // if (key === "w") {
  //   connection.write("Move: up");
  // }
  // if (key === "a") {
  //   connection.write("Move: left");
  // }
  // if (key === "s") {
  //   connection.write("Move: down");
  // }
  // if (key === "d") {
  //   connection.write("Move: right");
  // }
  for (const [keyMove, valueMove] of Object.entries(moves)) {
    if (key === keyMove) {
      return valueMove;
    }
  }
};

module.exports = { setupInput, connection };
