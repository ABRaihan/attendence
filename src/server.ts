import { app } from "@/app/app";
import { createServer } from "http";

const server = createServer(app);

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log(`⚡ [${new Date().toISOString()}] server up → http://localhost:${PORT}`);
});
