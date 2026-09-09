import { Elysia } from 'elysia';

export const swaggerBasicAuth = (username = "admin", password = "admin") => {
  return new Elysia({ name: "swagger-basic-auth" })
    .onRequest(({ request }) => {
      const url = new URL(request.url);
      
      if (url.pathname.startsWith("/swagger")) {
        const authHeader = request.headers.get("authorization");
        
        const expectedBase64 = btoa(`${username}:${password}`);

        const token = authHeader?.split(" ")[1];

        if (token !== expectedBase64) {
          return new Response("Unauthorized access", {
            status: 401,
            headers: {
              "WWW-Authenticate": 'Basic realm="Secure Swagger UI"',
              "Cache-Control": "no-store, no-cache, must-revalidate"
            }
          });
        }
      }
    });
};
