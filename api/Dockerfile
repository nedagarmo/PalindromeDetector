FROM node:12.20.1-buster
ENV APPDIR=/app/
WORKDIR $APPDIR

COPY . $APPDIR
RUN npm i

CMD ["npm", "start"]