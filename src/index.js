const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json('Oi')
})
app.listen(3333)