import http from "http";
import router from "../router/router.mjs";
import triggers from "../utility/commanTriggers.mjs";
import DB from "../db/index.mjs";

export default (port) => {
  DB.then((obj) => {
    const server = http.createServer((req, res) => router(req, res, obj));

    server.listen(port, () => {
      console.log("Up on port " + port);
    });
    server.on("close", () => {
      triggers.emit("serverclosed");
    });
  });
};
