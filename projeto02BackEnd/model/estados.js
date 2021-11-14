const mongoose = require("mongoose");

const estadosModel = new mongoose.Schema({
  nome: { type: String, required: true },
  regiao: { type: String, required: true },
  populacao: { type: Number, required: true },
  vlSalarioMin: { type: Number, required: true },
  dataCriacao: { type: Date, default: Date.now },
});

const estado = mongoose.model("estados", estadosModel);

module.exports = estado;
