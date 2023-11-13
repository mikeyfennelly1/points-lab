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

const getFile = (fileName) => {
    app.get(fileName, async (req, res) => {

        function getMimeType(fileName) {
            const fileExtension = fileName.split('.').pop().toLowerCase();
            
            const mimeTypesMap = new Map();
        
            mimeTypesMap.set('js', 'application/javascript');
            mimeTypesMap.set('css', 'text/css');
            mimeTypesMap.set('html', 'text/html');

            mimeType = mimeTypesMap.get(fileExtension);
            return mimeType;
        }
        thisMimeType = getMimeType(fileName)
        
        console.log(thisMimeType)
        
        try {
            const filePath = `../pointsLab-codeContents/${fileName}`;

            const fileContent = await fs.readFile(filePath, 'utf-8');

            res.setHeader('Content-Type', thisMimeType)

            res.send(fileContent);
        } catch {
            res.status(500).send('Internal Server Error: ' + error);
        }
    })
}


getFile('/index.html');
getFile('/index.js');
getFile('/index.css');



app.use('/subscribers', subscribersRouter)

app.listen(serverPort, () => {
    console.log(`Server started on port ${serverPort}`)
    console.log(`Connecting to Mongo on port ${process.env.DATABASE_URL}`)
})
