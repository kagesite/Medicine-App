const express = require("express");
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.static(path.join(__dirname, "public")));


const drugsRawData = fs.readFileSync('data.json');
const drugsData = JSON.parse(drugsRawData);

app.get("/drugs", (req, res) => {
    res.json(drugsData);
});


const sourcesRawData = fs.readFileSync('sourcesData.json');
const sourcesData = JSON.parse(sourcesRawData);

app.get('/sources', (req, res) => {
    res.json(sourcesData);
})

app.listen(PORT, () => {
    console.log(`Server is live on Port ${PORT}`);
})