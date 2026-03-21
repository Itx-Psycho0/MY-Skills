import http from "node:http";
import fs from "node:fs/promises";
import { serveStatic } from "./utils/serveStatic.js";
import { handleGet } from "./handlers/routeHandlers.js";

const PORT = 8000;

const __dirname = import.meta.dirname;

const server = http.createServer(async (req, res) => {
  if (req.url === "/api") {
    if (req.method === "GET") {
      return await handleGet(req, res);
    } else if (req.method === "POST") {
      handlePost(req, res);
    }
  } else if (!req.url.startsWith("/api")) {
    await serveStatic(req, res, __dirname);
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
