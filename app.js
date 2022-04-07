const express = require('express')

const app = express() 

app.get('/', function(req, res) { 

    res.send('Hola mundo, Nombre: Nibci Pinto, cedula: 29.689.267, Sección: 1')
})

app.listen(3000)