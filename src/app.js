import http from "http";
import express from "express";
import loaders from "./loaders";

async function startServer(port) {
  const app = express();
  const server = http.createServer(app);
  loaders(app, server);

  app.listen(port, () => {
    console.log("App is listening on port", port);
  });
}

const PORT = process.env.PORT || 3000;
startServer(PORT);
