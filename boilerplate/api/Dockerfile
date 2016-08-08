FROM mhart/alpine-node

RUN apk add --update \
    python \
    build-base \
  && rm -rf /var/cache/apk/*

COPY package.json /opt/app/
WORKDIR /opt/app
RUN npm install && npm cache clean

COPY . /opt/app

EXPOSE 9999

CMD ["npm", "run", "start"]
