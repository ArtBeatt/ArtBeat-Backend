
CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    verificationStatus BOOLEAN DEFAULT FALSE,
    verificationCode VARCHAR(50),
    role VARCHAR(10) NOT NULL CHECK (role IN ('Artist', 'Buyer')),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

/* Kathy Tran: Create tables based on descriptions in Notion */

CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    passwordHash VARCHAR(255) NOT NULL,
    profilePicture VARCHAR(255),
    bio TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE Artwork (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userId INT NOT NULL,
    imageUrl VARCHAR(255) NOT NULL,
    description TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (userId) REFERENCES Users(id)
);

CREATE TABLE Comments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    artworkId INT NOT NULL,
    userId INT NOT NULL,
    text TEXT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (artworkId) REFERENCES Artwork(id),
    FOREIGN KEY (userId) REFERENCES Users(id)
);

CREATE TABLE Likes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    artworkId INT NOT NULL,
    userId INT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (artworkId) REFERENCES Artwork(id),
    FOREIGN KEY (userId) REFERENCES Users(id)
);

CREATE TABLE Messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    senderId INT NOT NULL,
    receiverId INT NOT NULL,
    content TEXT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (senderId) REFERENCES Users(id),
    FOREIGN KEY (receiverId) REFERENCES Users(id)
);

CREATE TABLE Connections (
    id INT AUTO_INCREMENT PRIMARY KEY,
    requesterId INT NOT NULL,
    requesteeId INT NOT NULL,
    status ENUM('pending', 'accepted', 'declined') NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (requesterId) REFERENCES Users(id),
    FOREIGN KEY (requesteeId) REFERENCES Users(id)
);

CREATE TABLE Notifications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userId INT NOT NULL,
    type ENUM('message', 'like', 'comment', 'connection_request') NOT NULL,
    message TEXT,
    read BOOLEAN DEFAULT FALSE,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (userId) REFERENCES Users(id)
);


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
);