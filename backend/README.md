# WowMusic Backend Service

ระบบ Backend API สำหรับ **WowMusic** พัฒนาด้วย **ElysiaJS** บน **Bun runtime**

## 🛠 Tech Stack
- **Runtime:** [Bun](https://bun.sh/)
- **Web Framework:** [ElysiaJS](https://elysiajs.com/)
- **API Documentation:** `@elysiajs/swagger` (รองรับ Swagger UI)
- **Containerization:** Docker

## 📁 โครงสร้างโปรเจกต์
```
backend/
├── src/
│   ├── common/
│   │   └── swaggers/       # การตั้งค่า Swagger UI & Basic Auth
│   ├── modules/
│   │   └── audio/          # Audio Service & Route (ดึงไฟล์จาก Google Drive)
│   └── index.ts            # Main Entry Point
├── .env.example
├── Dockerfile
├── package.json
└── tsconfig.json
```

## ⚙️ การติดตั้งและรันเซิร์ฟเวอร์

### 1. ตั้งค่า Environment Variables
คัดลอกไฟล์ `.env.example` เป็น `.env` และใส่ Google Drive API Key:
```bash
cp .env.example .env
```

### 2. รันด้วย Bun (Development Mode)
```bash
bun install
bun run dev
```

### 3. รันด้วย Docker
```bash
docker build -t wowmusic-backend .
docker run -d -p 3000:3000 --env-file .env wowmusic-backend
```

## 🌐 API Endpoints

- **Swagger Documentation:** `GET /swagger` (Default User: `admin`, Password: `admin`)
- **Get Audio Stream:** `GET /api/audio/:fileId`
