const express = require('express')
const mongoose = require('mongoose')

const user = require('./user.handler')
const app = express()

const port = 3000

app.use(express.json())

mongoose.connect('mongodb+srv://kevins:kevin7410@appcurso.gw278oi.mongodb.net/api-db?retryWrites=true&w=majority')

app.get('/api/', user.list)
app.post('/api/', user.create)
app.get('/api/:id', user.get)
app.put('/api/:id', user.update)
app.delete('/api/:id', user.delete)

app.listen(port, ()=>{ //Salida del terminal por donde se escuchara la aplicacion
    console.log(`El ejemplo se esta ejecutando en el puerto: ${port}`)
    console.log('Run in: http://localhost:3000/api')
})