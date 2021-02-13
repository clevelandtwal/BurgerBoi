DROP DATABASE IF EXISTS cheeseburger_db;

CREATE DATABASE cheeseburger_db;

USE cheeseburger_db;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL, 
    burger_name VARCHAR(100) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);

