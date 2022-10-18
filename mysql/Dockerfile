FROM mysql:latest

RUN chown -R mysql:root /var/lib/mysql/

ENV MYSQL_DATABASE=nodedb
ENV MYSQL_USER=edutuca
ENV MYSQL_PASSWORD=edutuca
ENV MYSQL_ROOT_PASSWORD=edutuca

ADD setup.sql /etc/mysql/data.sql

RUN sed -i 's/MYSQL_DATABASE/'nodedb'/g' /etc/mysql/data.sql
RUN cp /etc/mysql/data.sql /docker-entrypoint-initdb.d

EXPOSE 3306