FROM node:20-alpine as build

WORKDIR /usr/app

COPY . /usr/app/

RUN npm install && \
    npm run build

FROM nginx:1.25-alpine

EXPOSE 80

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=build /usr/app/dist /usr/share/nginx/html

