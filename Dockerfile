FROM node:18-alpine

RUN mkdir -p /usr/src/app
ENV PORT 3000

WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY yarn.lock /usr/src/app

# Production use node instead of root
# USER node

ENV NODE_OPTIONS "--openssl-legacy-provider"

RUN yarn install

COPY . /usr/src/app

ENV NODE_ENV production

RUN yarn build

EXPOSE 3000
CMD [ "yarn", "start" ]
