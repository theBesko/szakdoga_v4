import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import next from "next";
import rootRouter from "./routes/index.js";

const PORT = 3000;

const run = async () => {
  const app = next({ dev: false, dir: "." });
  const handle = app.getRequestHandler();
  const server = express();

  await app.prepare().catch((ex) => killApp(ex));

  server.use(express.json());
  server.use(cors());
  server.use(bodyParser.json());
  server.use("/api", rootRouter(server));

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(PORT, (e) => serverReady(e));
};

const killApp = (e) => {
  console.error(e.stack);
  process.exit(1);
};

const serverReady = (e) => {
  if (e) killApp(e);
  console.log(`server started on port ${PORT}`);
};

run();
