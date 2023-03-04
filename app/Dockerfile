FROM node:19-alpine as base

RUN corepack enable

WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

COPY . .

ENTRYPOINT [ "node", "index.js" ]
