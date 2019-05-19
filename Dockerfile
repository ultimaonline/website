FROM gokaygurcan/node:latest

WORKDIR /var/www/ultimaonline.dev

USER root

COPY . .

RUN yarn install
RUN yarn build

USER ubuntu

EXPOSE 3000

CMD [ "yarn", "start" ]
