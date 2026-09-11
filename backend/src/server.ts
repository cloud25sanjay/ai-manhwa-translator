import dns from "node:dns";

dns.setServers(["8.8.8.8"]);

import "dotenv/config";
import app from "./app.js";
import { env } from "./config/env.js";
import { connectDatabase } from "./db/connection.js";

const startServer = async () => {
  try {
    await connectDatabase();

    app.listen(env.port, () => {
      console.log(
        `AI Manhwa Translator backend is running on port ${env.port}`,
      );
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
