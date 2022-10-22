"use strict";
const express = require('express');
const app = express();
const port = 3000;
let counter = 0;
app.get('/', (req, res) => {
    counter = counter + 10;
    res.send(`Get request #${counter} success.`);
});
app.listen(port, () => {
    console.log(`App started on ${port} port`);
});
