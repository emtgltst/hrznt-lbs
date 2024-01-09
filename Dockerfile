# Using an official Node runtime as parent image
FROM node:14

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000

# Define environment variable - although not used in this example, it is required
ENV NODE_ENV production

# Run the app when the container launches
CMD ["node", "dist/server.js"]
