const { response } = require('express');
const express = require('express')
const app = express()
const port = 3001
const metodoClass = require('./classes/metodos');



//rotas
app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/atacar/:oponente/:desafiador', (req, res) => {
  const metodo = metodoClass.atacar(req.params.oponente, req.params.desafiador)
  res.send(metodo)
})



app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})

