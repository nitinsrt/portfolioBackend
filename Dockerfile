FROM node:latest
WORKDIR /apps
ADD . .
RUN npm install
CMD ["Nodemon", "app.js"]