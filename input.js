// Stores the active TCP connection object.
let connection;
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  
  stdin.on("data", (input) => {
    conn.write("Move: down")
    conn.write("Move: up")
  })
  
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = (key) => {
  if (key === "\u003") {
    process.exit();
  }
};

module.exports = { setupInput }