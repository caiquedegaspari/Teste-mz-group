FROM node:16
WORKDIR /app
COPY package.json ./
COPY tsconfig.json ./
COPY src ./src
RUN ls -a
RUN npm install
EXPOSE 4000
CMD ["npm","run","dev"]