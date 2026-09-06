import { MtaClient } from "./Client";

new MtaClient().run().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
