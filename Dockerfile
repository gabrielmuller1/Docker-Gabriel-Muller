FROM node:alpine

WORKDIR /Docker
COPY package*.json ./

RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "install"]