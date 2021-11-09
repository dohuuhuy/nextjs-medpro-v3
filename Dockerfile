FROM node:12

ENV PORT 3009

RUN mkdir /app
WORKDIR /app
ADD . /app

RUN npm install --save

# Building app
EXPOSE 3009
RUN npm run build

# Running the app
CMD ["npm","run","start"]
