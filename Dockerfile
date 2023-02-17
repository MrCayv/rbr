FROM node:16.15.1-alpine

WORKDIR /usr/app

RUN npm install

CMD ["npm", "start"]