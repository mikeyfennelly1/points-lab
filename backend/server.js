require('dotenv').config()

const express = require('express');
const app = express();
const mongoose = require('mongoose')
const subscribersRouter = require('./routes/subscribers')
const serverPort = 3004

mongoose.connect(process.env.DATABASE_URL, {useNewURLParser: true});
const db = mongoose.connection
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use(express.json())

app.use('/subscribers', subscribersRouter)

app.listen(serverPort, () => {
    console.log(`Server started on port ${serverPort}`)
    console.log(`Connecting to Mongo on port ${process.env.DATABASE_URL}`)
})