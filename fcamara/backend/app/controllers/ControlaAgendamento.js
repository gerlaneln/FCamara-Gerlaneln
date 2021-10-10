const Agendamento = require('../models/Agendamento');

module.exports = {
    async register (req, res){
        const { sede, data, estacao, email } = req.body;

        const newAgendamento = new Agendamento();

        newAgendamento.sede = sede;
        newAgendamento.data = data;
        newAgendamento.estacao = estacao;
        newAgendamento.email = email;

        newAgendamento.save((err, saveAgendamento) => {
            if (err) {
                console.log(err);
                return res.status(500).send('Erro ao realizar agendamento.');
            }
            return res.status(200).send(saveAgendamento);
        })
    }
}