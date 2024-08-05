# Use the official Node.js image from the Docker Hub
FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and install dependencies
COPY package.json .
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React application
RUN npm run build

# Install serve to serve the build files
RUN npm install -g serve

# Expose the port serve runs on
EXPOSE 3000

# Command to run the application
CMD ["serve", "-s", "build"]
