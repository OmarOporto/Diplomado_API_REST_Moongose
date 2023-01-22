const express = require('express');
const mongoose= require('mongoose');
require("dotenv").config();
const routes_u = require("./routes/usuario");
const routes_p = require("./routes/producto");

const app= express();
const port = process.env.PORT || 9000;

//midlewares

app.use(express.json());
app.use('/api',routes_u);
app.use('/api',routes_p);

//route probe
app.get('/', (req,res) =>
{
    res.send("Welcome to my API");
})

//mongodb connection

mongoose
    .connect(process.env.MONGODB_URL)
    .then(()=>console.log("connected to MongoDB Atlas"))
    .catch((error)=>console.error(error))

app.listen(port, () => console.log('server listen on port', port));