FROM node:19-alpine as base

RUN corepack enable

WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

COPY . .

EXPOSE 3000

ENTRYPOINT [ "node", "index.js" ]
