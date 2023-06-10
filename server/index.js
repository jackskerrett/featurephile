const express = require('express');
const features = require("./routes/features");

const app = express();

app.use('/api/features', features)

app.get('/api', (req, res) => {
    res.send("hello word");
})

app.listen(1234);