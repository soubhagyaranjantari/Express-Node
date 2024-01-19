const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('From Home Page')
})
app.get('/about', (req, res) => {
    res.send(`From ABOUT PAGE ${req.query.name}`)
})
app.listen(PORT, () => {
    console.log(`Server Listing On Port ${PORT}`);
})