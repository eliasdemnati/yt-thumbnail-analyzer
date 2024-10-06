FROM imbios/bun-node:1.1.29-22.9.0-alpine
WORKDIR /app
COPY package.json bun.lockb ./
RUN bun install
COPY . .
EXPOSE 5173
CMD ["bun", "dev", "--host"]
