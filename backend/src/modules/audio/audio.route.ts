import { Elysia, t } from "elysia";
import { fetchAudioFromDrive } from "./audio.service";

export const audioRoute = new Elysia()
  .get("/api/audio/:fileId", async ({ params }) => {
      const { fileId } = params; 
      return await fetchAudioFromDrive(fileId);
  }, {
      params: t.Object({
          fileId: t.String({ pattern: '^[a-zA-Z0-9_-]+$' })
      }),
      detail: {
          tags: ["Audio"],
          summary: "Fetch audio stream from Google Drive"
      }
  });
