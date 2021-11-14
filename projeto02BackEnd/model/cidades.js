const mongoose = require("mongoose");

const cidadesModel = new mongoose.Schema({
  nome: { type: String, required: true },
  qtdBairros: { type: Number, required: true },
  populacao: { type: Number, required: true },
  dtAniversario: { type: Date, required: true },
  dataCriacao: { type: Date, default: Date.now },
});

const cidade = mongoose.model("cidades", cidadesModel);

module.exports = cidade;
