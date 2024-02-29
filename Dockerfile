FROM node:latest

WORKDIR /apps

# Copy package.json and package-lock.json first to leverage Docker caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port your app will run on
EXPOSE 3000

# Command to run your application using Nodemon
CMD ["npx", "nodemon", "app.js"]
