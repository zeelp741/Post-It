import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from "cors"
import dotenv from 'dotenv'
import postRoutes from './routes/posts.js'

// Initalize App
const app = express();

// Setup
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

// Connects to application
// Every route in postRoutes is going to start with posts
app.use('/posts', postRoutes) 

app.get('/', (req, res) => {
  res.send("Hello to Post it API")
})

// Connect to database
const CONNECTION_URL = 'mongodb+srv://post-it-admin:post-it-admin-password@cluster0.hpkpu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;


mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port : ${PORT}`)))
    .catch((error) => console.log(error.message));

// app.listen(PORT);

mongoose.set('useFindAndModify', false);  