FROM node:latest

WORKDIR /app

COPY package.json ./ 

COPY . .

RUN npm ci

EXPOSE 3000

CMD ["npm", "start"]