FROM node:9.5.0-alpine

WORKDIR /app

COPY . .

RUN yarn && yarn build

CMD [ "node", "dist/app/server.js" ]