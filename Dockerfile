FROM nginx:alpine

COPY ./build /usr/share/nginx/html

RUN echo $' \n\
server { \n\
  listen 90; \n\
  server_name localhost; \n\
  root /usr/share/nginx/html; \n\
  index index.html; \n\
  location / { \n\
    try_files $uri /index.html; \n\
  } \n\
} ' > /etc/nginx/conf.d/default.conf

EXPOSE 90

CMD ["nginx", "-g", "daemon off;"]

