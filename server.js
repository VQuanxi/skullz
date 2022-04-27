const path = require('path');
const express = require('express');
const app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/public/main.html`);
});
app.post('/post', (req, res) => {
    console.log(req.body)
    res.send(req.body)
});
app.listen(420, () => {
    console.log('Application listening on port 420!');
});
