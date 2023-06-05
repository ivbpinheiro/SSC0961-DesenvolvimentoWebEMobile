FROM node:lts-alpine

ENV CHOKIDAR_USEPOLLING=true

RUN mkdir /app

WORKDIR /app

COPY package*.json ./

RUN npm install -g @vue/cli-service-global 

COPY . .

RUN npm run build