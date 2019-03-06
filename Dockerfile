FROM node:10-slim

MAINTAINER Kevin You

# Create App Directory and set wokring directory
RUN mkdir -p /home/node/app
WORKDIR /home/node/app

# Install Global Dependencies
RUN npm install -g yarn
RUN npm install -g node-pre-gyp
RUN npm install -g node-gyp

# Install Local Dependencies
COPY package*.json ./
RUN npm install

# Build App
COPY . .
EXPOSE 8081 8081 
ENV NODE_ENV production

CMD ["yarn", "prod"]