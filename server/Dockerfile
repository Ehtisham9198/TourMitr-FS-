FROM node:lts-alpine

WORKDIR /app

COPY package.json ./
RUN npm install

COPY client/ client/
COPY index.js ./

USER node

CMD [ "npm", "start" ]

EXPOSE 8081