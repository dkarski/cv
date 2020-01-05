FROM node:10.15.3

ENV PORT 3000

WORKDIR /usr/src/app

COPY . .

RUN yarn install

EXPOSE 3000

CMD [ "yarn", "watch" ]