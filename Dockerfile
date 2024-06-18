# Use the official Node.js image.
FROM node:21

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
COPY package*.json ./


# Install production dependencies.
RUN npm install

# Copy local code to the container image.
COPY . .


# Run the web service on container startup.
CMD [ "npm", "start" ]
ENV PORT=8080

ENV FIREBASE_API_KEY=
ENV FIREBASE_AUTH_DOMAIN=
ENV FIREBASE_PROJECT_ID=
ENV FIREBASE_STORAGE_BUCKET=
ENV FIREBASE_MESSAGING_SENDER_ID=
ENV FIREBASE_APP_ID=