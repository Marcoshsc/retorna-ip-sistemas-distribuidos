FROM node

WORKDIR /app

COPY index.js .
COPY package.json .

RUN yarn install

ENTRYPOINT [ "yarn", "start" ]