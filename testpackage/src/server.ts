import express from "express";
import { createServer } from "vite";
import react from "@vitejs/plugin-react";
import { ironSession } from "iron-session/express";

export async function launchServer(cookie_secret: string) {
  const app = express();

  const session = ironSession({
    cookieName: "framework/iron-session",
    password: cookie_secret,
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    },
  });

  app.use(session);

  const vite = await createServer({
    plugins: [react()],
    server: {
      middlewareMode: "html",
    },
    envPrefix: "FRONTEND_",
  });
  app.use(vite.middlewares);
  app.use("*", async (req, res) => null);

  app.listen(3000, () => console.log("🚀 App ready"));
}
