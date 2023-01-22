const express = require('express');
const morgan = require("morgan");
const mongoose= require('mongoose');
require("dotenv").config();
const routes_u = require("./routes/usuario");
const routes_p = require("./routes/producto");

const app= express();
app.use(morgan('dev'));
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

//error condition D

app.all("*", (req, res, next) => {
    throw new Error('route not found');
});

app.use((err, req, res, next) => {
    res.status(400).json({
        status: "error",
        message: err.message,
    });
});

//mongodb connection

mongoose
    .connect(process.env.MONGODB_URL)
    .then(()=>console.log("connected to MongoDB Atlas"))
    .catch((error)=>console.error(error))

app.listen(port, () => console.log('server listen on port', port));

module.exports = app;