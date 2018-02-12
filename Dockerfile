FROM node:latest

EXPOSE 8888

RUN mkdir /webclient
WORKDIR /webclient

COPY . .
RUN yarn install --production
RUN yarn build

CMD ["yarn", "start"]
