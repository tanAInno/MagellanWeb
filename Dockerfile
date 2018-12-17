FROM node:11-alpine

WORKDIR /app

copy . .
RUN npm install
EXPOSE 5050
EXPOSE 5000

CMD ["npm", "run", "dev"]

