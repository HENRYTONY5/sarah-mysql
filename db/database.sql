CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE agente(

    id int(11) NOT NULL AUTO_INCREMENT,
    name varchar(65) DEFAULT NULL,
    usuario VARCHAR(25) DEFAULT NULL,
    phone VARCHAR(13) DEFAULT NULL,
    passwd VARCHAR(12),
    PRIMARY KEY (id)
);
DESCRIBE AGENTE; 
INSERT INTO agente VALUES 
(1, 'July','July@test.com', '5554545445','passwd0'),
(2, 'July0','July0@test.com', '5554545446','passwd0'),
(3, 'July1','July1@test.com', '5554545447','passwd0'),
(4, 'July2','July2@test.com', '5554545448','passwd0');
        