import { config } from "dotenv";
export default function express(path: string) {
  return {
    name: "vite3-plugin-express",
    configureServer: async (server: any) => {
      process.on("unhandledRejection", (reason, promise) => {});
      server.middlewares.use(async (req: any, res: any, next: any) => {
        config();
        process.env["VITE"] = "true";
        try {
          const { app } = await server.ssrLoadModule(path);
          app(req, res, next);
        } catch (err) {
          console.error(err);
          next();
        }
      });
    },
  };
}
