const express = require('express')
const app = express()
const port = 3001
const personagemClass = require('./classes/Personagem');


//rotas
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/atacar/:oponente/:desafiador', (req, res) => {
  personagemClass.atacar(req.params.oponente, req.params.desafiador)
  res.json({
    "status": "comando executado"
  })
})

app.get('/personagen/:personagem_nome', (req, res) => {
  const poderes = personagemClass.getPoder(req.params.personagem_nome,)
  res.json({
    poderes
  })
})

app.get('/personagens', (req, res) => {
  const personagens = personagemClass.getPersonagens()
  res.json({
    personagens
  })
})

app.post('/poder/:personagem_nome', (req, res) => {
  const personagens = personagemClass.getPersonagens(req.body)
  res.json({
    "status": "comando executado"
  })
})


// Server
app.listen(port, () => {
  console.log(`app executando na porta ${port}`)
})

