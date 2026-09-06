import * as protobuf from "protobufjs";
import path from "node:path";

export async function loadProtocol() {
  const protoPath = path.resolve(__dirname, "../../proto/cot.proto");
  return protobuf.load(protoPath);
}

export function frame(payload: Uint8Array): Buffer {
  const header = Buffer.allocUnsafe(4);
  header.writeUInt32BE(payload.length, 0);
  return Buffer.concat([header, Buffer.from(payload)]);
}
