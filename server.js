require('dotenv').config()

const express = require('express');
const app = express();
//const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

app.use(express.json());


const posts = [
    {
        username: 'Anika',
        title: 'post 1'
    },
    {
        username: 'jim_c',
        title: 'post 2'
    }
]

//route, returns
app.get('/posts', (req, res) => {
    res.json(posts)
})



//login route 
app.post('/login', (req, res) => {

    //recieved from the front end 
    const { email, password } = req.body;


    try {
        // Check if email address exists
        // Get user from user database //TO-DO update/create user file with this function

        const user = getUserByEmail(email);

        if (!user) {
            throw new Error('Email address does not exist');
        }

        // Validate password
        const validPassword = bcrypt.compareSync(password, user.password);

        if (!validPassword) {
            throw new Error('Invalid Email or Password');
        }

        // Create JWT token
        const accessToken = jwt.sign({ email: user.email }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });

        // Return the token
        res.json({ accessToken });
    } catch (error) {
        // Handle errors
        res.status(401).json({ message: error.message });
    }

})
app.listen(3000)

