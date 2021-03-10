const { connection } = require("./input");
const IP = "135.23.222.131";
const PORT = 50542;
// const MOVE_UP_KEY = "w";
// const MOVE_DOWN_KEY = "s";
// const MOVE_LEFT_KEY = "a";
// const MOVE_RIGHT_KEY = "d";

const moves = {
  w: connection.write("Move: up"),
  s: connection.write("Move: down"),
  a: connection.write("Move: left"),
  d: connection.write("Move: right"),
};

module.exports = { IP, PORT, moves };
