FROM node:20.11.0 AS base

FROM base AS production
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
CMD ["sh", "-c", "npm run build && npm run start"]

FROM base AS development
ENV NODE_ENV development
WORKDIR /packages
COPY package.json ./
RUN npm install
WORKDIR /app
COPY . .
CMD [ "sh", "-c", "rm -rf /app/node_modules && mv /packages/node_modules /app && npm run dev" ]
