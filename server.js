const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'public')))
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/public/main.html`);
});
app.post('/post', (req, res) => {
    console.log(req.params)
    res.send(req.params)
});
app.listen(420, () => {
    console.log('Application listening on port 420!');
});
