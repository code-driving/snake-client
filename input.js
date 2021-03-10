// Stores the active TCP connection object.
let connection;
const keys = ['w', 'a', 's', 'd']

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
  for (let key of keys) {
    switch (key) {
      case 'w':
      console.log('up');
      break;
      case 'a':
      console.log('left');
      break;
      case 'd':
      console.log('right');
      break;
      case 's': 
      console.log('down')
      break;
      default: 
      console.log(`Happy snake`)
    }
  }
  if (key === "\u003") {
    process.exit();
  }
};

module.exports = { setupInput }