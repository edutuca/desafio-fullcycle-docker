CREATE TABLE people(id int not null auto_increment, name varchar(255), primary key(id));

INSERT INTO people(name) VALUES ('Eduardo');
INSERT INTO people(name) VALUES ('Ricardo');
INSERT INTO people(name) VALUES ('José');
INSERT INTO people(name) VALUES ('Maria');

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'edutuca';
FLUSH PRIVILEGES;
ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'edutuca';
FLUSH PRIVILEGES;
