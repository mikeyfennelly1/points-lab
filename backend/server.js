require('dotenv').config()
const fs = require('fs').promises;
const path = require('path')

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

app.use(express.static(path.join(__dirname, 'public')));


const mimeTypesMap = new Map();
        
mimeTypesMap.set('js', 'application/javascript');
mimeTypesMap.set('css', 'text/css');
mimeTypesMap.set('html', 'text/html');

mimeTypesMap.set('png', 'image/x-png');
mimeTypesMap.set('png', 'font/ttf');

function getMimeType(fileName) {
    const fileExtension = fileName.split('.').pop().toLowerCase();
    mimeType = mimeTypesMap.get(fileExtension);
    return mimeType;
}



app.get('/resources/*', async (req, res) => {
    // Access the wildcard parameter
    const matchedPath = req.params[0];
    console.log(matchedPath)
  
    try {
        const filePath = `../${matchedPath}`;
        const thisMimeType = getMimeType(filePath)
        const fileContent = await fs.readFile(filePath, 'utf-8');
    
        res.setHeader('Content-Type', thisMimeType)
    
        res.send(fileContent);
    } catch (error){
        res.status(500).send('Internal Server Error: ' + error);
    }
  });
  


app.use('/subscribers', subscribersRouter)

app.listen(serverPort, () => {
    console.log(`Server started on port ${serverPort}`)
    console.log(`Connecting to Mongo on port ${process.env.DATABASE_URL}`)
})
