# Image
FROM node:16-alpine3.13

# Set up work directory
WORKDIR /var/www/api

# Configure host
ENV HOST 0.0.0.0

# Init command
CMD ["sh", "-c", "yarn install && yarn run develop"]