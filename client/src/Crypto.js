const { randomBytes } = require("node:crypto");

function randomScalar32() {
  return randomBytes(32);
}

function toHex(value) {
  return value.toString("hex");
}

module.exports = { randomScalar32, toHex };
