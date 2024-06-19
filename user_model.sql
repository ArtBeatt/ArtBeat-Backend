CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    verificationStatus BOOLEAN DEFAULT FALSE,
    verificationCode VARCHAR(50),
	role VARCHAR(10) NOT NULL CHECK (role IN ('Artist', 'Buyer')),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);