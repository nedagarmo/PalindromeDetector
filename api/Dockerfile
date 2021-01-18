FROM node:12.20.1-buster
ENV APPDIR=/app/
ARG CI=true
WORKDIR $APPDIR

COPY . $APPDIR
RUN npm i
RUN npm test

CMD ["npm", "start"]