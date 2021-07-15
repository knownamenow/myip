FROM mhart/alpine-node:slim-14

WORKDIR /app

COPY . .

EXPOSE 8080

CMD ["node", "index.js"]