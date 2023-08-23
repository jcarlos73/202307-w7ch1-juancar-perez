import debugCreator from "debug";
import "dotenv/config.js";
import app from "./index.js";

const debug = debugCreator("things:server:start");

const startServer = (port: string | number) => {
  app.listen(+port, () => {
    debug(`Listening on http://localhost:${port}/things`);
  });
};

export default startServer;
