const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = (key) => {
  if (key === "\u003") {
    process.exit();
  }
};

// const stdin = process.stdin;
// stdin.setEncoding("utf8");
/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */

// stdin.on("data", (input) => {
//   conn.write("finally successfully connected :)");

//   //   //client.write("Move: up")
//   //   //client.write("Move: down")
//   //   //change snake initials
// });
module.exports = { setupInput }