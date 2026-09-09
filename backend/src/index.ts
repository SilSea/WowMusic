import { Elysia, redirect } from "elysia";
import { cors } from "@elysiajs/cors";
import { html } from "@elysiajs/html";
import { staticPlugin } from "@elysiajs/static";
import { swaggerBasicAuth } from "./common/swaggers/swaggerAuth";
import { setupSwagger } from "./common/swaggers/swaggerConfig";
import { audioRoute } from "./modules/audio/audio.route";

const port = Number(Bun.env.PORT) || 3000;

const app = new Elysia()
  // Setting CORS
  .use(cors({
    origin: "*"
  }))

  // Plugins for HTML and Static Files
  .use(html())
  .use(staticPlugin())

  // Setting Swagger
  .use(swaggerBasicAuth())
  .use(setupSwagger)

  // Redirect root to Swagger UI
  .get("/", () => redirect("/swagger"))

  // Audio Routes (Supports both direct /api/audio/:fileId and /wowmusic/api/audio/:fileId)
  .use(audioRoute)
  .group("/wowmusic", app => app.use(audioRoute))

  // Port Run
  .listen(port);

console.log(
  `🦊 WowMusic Backend is running at http://${app.server?.hostname}:${app.server?.port}`
);
