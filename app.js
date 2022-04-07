const express = require('express')

const app = express()

app.get('/', function(req, res) {

    res.send('¡¡Hola Mundoo!!')
})

app.listen(3000)