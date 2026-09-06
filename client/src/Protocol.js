const protobuf = require("protobufjs");
const path = require("node:path");

async function loadProtocol() {
  const protoPath = path.resolve(__dirname, "../../proto/cot.proto");
  return protobuf.load(protoPath);
}

function frame(payload) {
  const header = Buffer.allocUnsafe(4);
  header.writeUInt32BE(payload.length, 0);
  return Buffer.concat([header, Buffer.from(payload)]);
}

module.exports = { loadProtocol, frame };
