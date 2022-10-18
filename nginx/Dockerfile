FROM nginx

RUN rm /etc/nginx/conf.d/default.conf

RUN apt-get update && apt-get install -y wget

#COPY nginx.conf /etc/nginx/
#COPY html /usr/share/nginx/html

#ENTRYPOINT [ "/docker-entrypoint.sh" ]

#CMD [ "nginx", "-g", "daemon off;" ]