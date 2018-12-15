FROM node:10 as buildenv

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install --no-cache --frozen-lockfile

COPY . .
RUN yarn run build

FROM gcr.io/google-appengine/nodejs
# RUN install_node v10.13.0

WORKDIR /usr/src/app

COPY --from=buildenv /usr/src/app/nuxt.config.js /usr/src/app/package.json /usr/src/app/yarn.lock ./
COPY --from=buildenv /usr/src/app/.nuxt/ .nuxt/

ENV NODE_ENV production
ENV HOST 0.0.0.0
ENV PORT 8080

RUN yarn install --no-cache --production --frozen-lockfile
EXPOSE 8080
CMD ["yarn", "start"]