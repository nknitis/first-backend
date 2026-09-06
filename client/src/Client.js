const net = require("node:net");
const { randomScalar32, toHex } = require("./Crypto");
const { frame, loadProtocol } = require("./Protocol");

class MtaClient {
  constructor(host = "127.0.0.1", port = 9000) {
    this.host = host;
    this.port = port;
  }

  async run() {
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

    await new Promise((resolve, reject) => {
      const socket = net.createConnection({ host: this.host, port: this.port });

      socket.once("connect", () => {
        socket.write(frame(message));
      });

      socket.once("error", reject);

      socket.once("data", (data) => {
        console.log("Server replied:", data.toString("hex"));
        socket.end();
        resolve();
      });
    });
  }
}

module.exports = { MtaClient };
