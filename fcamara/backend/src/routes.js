const express = require('express');
const ControlaAgendamento = require('../app/controllers/ControlaAgendamento');
const routes = new express.Router();

routes.post('/register', ControlaAgendamento.register);

routes.get('/', (req, res) =>{
    res.send('Servidor funcionando.');
})

module.exports = routes;