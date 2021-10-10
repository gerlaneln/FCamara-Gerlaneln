const mongoose = require('mongoose');

const AgendamentoSchema = new mongoose.Schema({
    sede: {
        type: String,
        required: true
    },
    data: {
        type: String,
        required: true
    },
    estacao: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Agendamento', AgendamentoSchema);