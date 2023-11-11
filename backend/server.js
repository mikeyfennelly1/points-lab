require('dotenv').config()
const fs = require('fs').promises;

const express = require('express');
const app = express();
const mongoose = require('mongoose')
const subscribersRouter = require('./routes/subscribers')
const serverPort = 3000


mongoose.connect(process.env.DATABASE_URL, {useNewURLParser: true});
const db = mongoose.connection
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));



app.use(express.json())

app.get('/index.html', async (req, res) => {
    try {
      // Specify the path to your HTML file
      const filePath = '../pointsLab-codeContents/index.html';

      // Read the file content
      const fileContent = await fs.readFile(filePath, 'utf-8');
  
      // Set the content type in the response header
      res.setHeader('Content-Type', 'text/html');
  
      // Send the file content as the response
      res.send(fileContent);
    } catch (error) {
      // Handle errors, e.g., file not found
      res.status(500).send('Internal Server Error: ' + error);
    }
  });

  app.get('/index.js', async (req, res) => {
    try {
      // Specify the path to your JavaScript file
      const filePath = '../pointsLab-codeContents/index.js';

      // Read the file content
      const fileContent = await fs.readFile(filePath, 'utf-8');
  
      // Set the content type in the response header
      res.setHeader('Content-Type', 'application/javascript');


      // Send the file content as the response
      res.send(fileContent);
    } catch (error) {
      // Handle errors, e.g., file not found
      res.status(500).send('Internal Server Error: ' + error);
    }
  });

app.use('/subscribers', subscribersRouter)

app.listen(serverPort, () => {
    console.log(`Server started on port ${serverPort}`)
    console.log(`Connecting to Mongo on port ${process.env.DATABASE_URL}`)
})
