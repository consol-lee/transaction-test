FROM node:16.14

MAINTAINER hansol

RUN apt-get update -yq \ 
&& apt-get install curl net-tools

WORKDIR /app
 
COPY package*.json /app/
 
RUN npm install
 
COPY . /app
 
EXPOSE 6500
 
CMD ["npm", "run", "docker-start"]
