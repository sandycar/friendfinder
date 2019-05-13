DROP DATABASE friendfinder_db;
CREATE DATABASE friendfinder_db;

USE friendfinder_db;

CREATE TABLE friendfilter_statements (
id INT NOT NULL AUTO_INCREMENT,
statements VARCHAR(255),
PRIMARY KEY (id)
);

CREATE TABLE friendfilter_answers (
    id INT NOT NULL AUTO_INCREMENT,
    answers INT,
    PRIMARY KEY (id)
);

