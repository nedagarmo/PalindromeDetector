FROM node:12.20.1-buster as node

WORKDIR /app
COPY ./ /app/

# Instala y construye las dependencias con npm
RUN npm i
# Compilamos la aplicación
RUN npm run build

# La compilación resultante la pasamos al servidor Nginx

FROM nginx:1.13.8-alpine

COPY --from=node /app/build/ /usr/share/nginx/html
# Se agrega configuración de compresión de archivos planos
COPY ./ops/nginx.conf /etc/nginx/conf.d/default.conf
