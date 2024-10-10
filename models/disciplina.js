const mongoose = require('mongoose');

const disciplinaSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    cargaHoraria: { type: String, required: true },
    responsavel: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

const Disciplina = mongoose.model('Disciplina', disciplinaSchema);

module.exports = Disciplina;
