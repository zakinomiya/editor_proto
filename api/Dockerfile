FROM node:alpine
COPY . /api
WORKDIR /api
RUN yarn && apk add python
EXPOSE 8000
