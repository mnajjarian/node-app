const express = require('express');

const app = express()


app.get('/', (req, res) => {
    res.send('<body><h1>Hello AWS NodeApp</h1></body>')
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})