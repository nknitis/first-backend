const { MtaClient } = require("./Client");

new MtaClient().run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
