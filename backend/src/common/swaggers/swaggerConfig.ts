import { swagger } from '@elysiajs/swagger';

export const setupSwagger = swagger({
    path: "/swagger",
    documentation: {
        info: {
            title: "WowMusic API Documentation",
            version: "1.0.0"
        },
        components: {
            securitySchemes: {
                BearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                    description: "ใส่แค่ตัว Token ไม่ต้องพิมพ์คำว่า Bearer"
                }
            }
        }
    }
});
