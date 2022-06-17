const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("hello World!")
})

app.listen(process.env.USER_PORT, () => {
    console.log(`app listening on port ${process.env.USER_PORT}`)
})