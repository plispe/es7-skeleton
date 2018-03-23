FROM node:9.6.1-alpine

WORKDIR /app

COPY . .

RUN yarn && yarn build

CMD [ "node", "dist/app/server.js" ]
