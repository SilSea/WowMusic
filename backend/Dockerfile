FROM oven/bun:latest

ENV TZ=Asia/Bangkok

USER root

RUN apt-get update && apt-get install -y tzdata && \
    ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

USER bun

WORKDIR /app

COPY package.json bun.lock* bun.lockb* ./
RUN bun install

COPY . .

EXPOSE 3000

CMD ["bun", "run", "src/index.ts"]
