const { connect } = require("./client");
// const stdin = process.stdin;
// stdin.setEncoding("utf8");
// stdin.on("data", (input) => {
//   conn.write("finally successfully connected :)");

//   //   //client.write("Move: up")
//   //   //client.write("Move: down")
//   //   //change snake initials
// });

console.log("Connecting ...");
connect();