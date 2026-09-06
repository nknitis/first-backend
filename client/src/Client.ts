import net from "node:net";
import { randomScalar32, toHex } from "./Crypto";
import { frame, loadProtocol } from "./Protocol";

export class MtaClient {
  constructor(private readonly host = "127.0.0.1", private readonly port = 9000) {}

  async run(): Promise<void> {
    const root = await loadProtocol();
    const ProtocolMessage = root.lookupType("cypherock.mta.ProtocolMessage");
    const ShareRequest = root.lookupType("cypherock.mta.ShareRequest");

    const x = randomScalar32();
    console.log("Client multiplicative share x:", toHex(x));

    const payload = ShareRequest.encode(
      ShareRequest.create({ multiplicative_share: x })
    ).finish();

    const message = ProtocolMessage.encode(
      ProtocolMessage.create({
        type: 1,
        version: 1,
        payload
      })
    ).finish();

    await new Promise<void>((resolve, reject) => {
      const socket = net.createConnection({ host: this.host, port: this.port });
      socket.once("connect", () => socket.write(frame(message)));
      socket.once("error", reject);
      socket.once("data", data => {
        console.log("Server replied:", data.toString("hex"));
        socket.end();
        resolve();
      });
    });
  }
}
