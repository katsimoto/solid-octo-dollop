const express = require('express');
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;
const pathToStatic = path.join(__dirname, 'dist');
app.use(express.static(pathToStatic));
app.listen(PORT, () => {
    console.log('server started');
});