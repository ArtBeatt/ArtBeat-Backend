//Importing Libraries that we installed using npm
const express = require("express") //express we downloaded from npm
const app = express()

//configure our view


//Routes
app.get('/', (req, res) => {//want to come to homepage //request, respond
    //res.send("Hello There")  -> write a lot of html code 
    res.render("index.ejs")//render a template, index.ejs is a template
}) 

app.get('/login', (req, res) => {
    res.render("login.ejs")
})

app.get('/register', (req, res) => {
    res.render("register.ejs")
})
//End Routes


app.listen(3000) //->CANNOT GET -> noting to route on
