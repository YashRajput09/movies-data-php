CREATE DATABASE IF NOT EXISTS moviedatabase;
USE moviedatabase;

CREATE TABLE IF NOT EXISTS movies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    director VARCHAR(255) NOT NULL,
    genre VARCHAR(100),
    release_year INT
);
