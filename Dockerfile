# Use an official Node.js image as the base image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json if available
COPY package.json ./
COPY package-lock.json ./

# Install Node.js dependencies
RUN npm install

# Install Hardhat globally
RUN npm install -g hardhat

# Copy the rest of the project files (including hardhat.config.js)
COPY . .

# Expose ports for Vite and Hardhat
EXPOSE 5173
EXPOSE 8545

# Default command to run in the container
CMD ["sh", "-c", "npm run dev || npx hardhat node"]
