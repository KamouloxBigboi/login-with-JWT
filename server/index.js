
const express = require('express');
const mongoose = require("mongoose");
const authRoutes = require("./Routes/AuthRoutes.js");
const cookieParser = require("cookie-parser");
const cors = require('cors');

const app = express();

app.listen(4000,() => {
    console.log("Server started on port 4000 !")
});

mongoose.set('strictQuery', true);
mongoose.connect(`mongodb+srv://KGuidadou:ddQ1kwJWSrcHVdaB@portfolio.osycsdj.mongodb.net/login-with-jwt`)
    .then(() => {
        console.log("MongoDB connexion successfull")
    }).catch(err => {
        console.log(err.message)
    });

app.use(cors({
    origin:["http://localhost:3000"],
    method:["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
}))

app.use(express.json());
app.use(cookieParser());
app.use('/', authRoutes);
