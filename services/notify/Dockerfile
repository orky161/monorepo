FROM node:12-alpine AS base

WORKDIR /project

FROM base AS dependencies

# We only copy the dependencies we need
COPY libs/logger libs/logger

COPY services/notify services/notify

# The global package.json only contains build dependencies
COPY package.json .

COPY yarn.lock .

RUN yarn install --production --pure-lockfile --non-interactive --cache-folder ./ycache; rm -rf ./ycache

EXPOSE 8081
CMD ["yarn", "workspace", "notify", "run", "start"]
