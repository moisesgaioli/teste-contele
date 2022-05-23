FROM node:16.14.2

WORKDIR /app

COPY package.json /app

RUN yarn

COPY . .

CMD [ "yarn", "dev" ]
