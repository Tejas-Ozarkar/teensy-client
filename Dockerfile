FROM node:alpine as builder
WORKDIR '/app'
COPY package.json .
RUN npm install 
COPY . .
RUN npm run build

FROM nginx
EXPOSE 80
# COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist/teensy-client /usr/share/nginx/html