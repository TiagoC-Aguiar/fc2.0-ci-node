FROM node:22.15-alpine

WORKDIR /app

COPY ./math.js .

CMD ["node", "math.js"]
