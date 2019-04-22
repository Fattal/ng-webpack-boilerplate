FROM node:10
RUN npm install -g @angular/cli
RUN mkdir -p /home/npm && chmod 777 /home/npm
ENV HOME /home/npm
WORKDIR /src
EXPOSE 4200
