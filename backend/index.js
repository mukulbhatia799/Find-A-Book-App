import dotenv from "dotenv";

dotenv.config();

import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import booksRoutes from './routes/booksRoutes.js';
const app = express();

app.use(express.json());    // middleware to convert string data into json data which is coming from req.

app.use(cors()); // as frontend and backend are running on different ports, so they can't communicate by default. So, we have to use cors in our backend which tells that which origins are allowed. 
// By default, cors(*) means all origins are allowed. We can also add custom origins.


app.get("/", (req, res) => {
    res.status(200).send("this is main page")
})

app.use("/books", booksRoutes);     // as there can be so many databases and for each databases there can be so many routes, so it is avoided to put all routes in index.js. Best practice is to create different files where each databases routes are created.

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("App connected to database.");
        app.listen(process.env.PORT, () => {    // here we will listen to the port only when database is connected.
            console.log(`App started:) at port: ${process.env.PORT}`);
        })
    })
    .catch(error => console.log("App not connected to database."))