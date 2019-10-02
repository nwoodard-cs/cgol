const express = require('express')
const app = express()
const path = require('path')
const port = 8080
const cgol = './public/html/cgol.html'

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/html/cgol.html'))
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
