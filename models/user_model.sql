CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    verificationStatus BOOLEAN DEFAULT FALSE,
    verificationCode VARCHAR(50),
    role VARCHAR(10) NOT NULL CHECK (role IN ('Artist', 'Buyer')),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

/* Kathy Tran: Create 3 tables for Mentorship, User profiles, and Posts */

CREATE TABLE Mentorship (
    id INT AUTO_INCREMENT PRIMARY KEY
    name VARCHAR(50) NOT NULL,
    experience VARCHAR(500)
);

CREATE TABLE User profiles (
    id INT AUTO_INCREMENT PRIMARY KEY
    name VARCHAR(50) NOT NULL,
);

CREATE TABLE Posts (
    id INT AUTO_INCREMENT PRIMARY KEY
    art_image_tag VARCHAR(50),
    artist_username VARCHAR(50), 
    date_of_posting DATE, 
    views INT, 
    likes INT, 
    interactions_amount_10sec_viewings INT, 
    time_of_posting TIME,
    caption CHAR(200)
);
