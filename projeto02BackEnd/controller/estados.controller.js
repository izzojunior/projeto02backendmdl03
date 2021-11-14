const estados = require("../model/estados");

function validarAddUpdt(res, reqisicao) {
  if (!reqisicao.nome) {
    res.status(400).send({
      message: "NOME inválido. Verifique as informações da requisição no body.",
    });
    return true;
  } else if (!req.body.regiao) {
    res.status(400).send({
      message:
        "REGIAO inválida. Verifique as informações da requisição no body.",
    });
    return true;
  } else if (!req.body.populacao) {
    res.status(400).send({
      message:
        "POPULAÇÃO inválida. Verifique as informações da requisição no body.",
    });
    return true;
  } else if (!req.body.vlSalarioMin) {
    res.status(400).send({
      message:
        "VLSALARIOMIN inválidO. Verifique as informações da requisição no body.",
    });
    return true;
  }
}

function validaId(res, id) {
  if (id.length !== 24) {
    res.status(400).json({ message: "id precisa ter 24 caracteres" });
    return true;
  }
}

exports.getAll = async (req, res) => {
  await estados
    .find({})
    .then((estados) => {
      res.status(200).json(estados);
    })
    .catch((err) => {
      res.status(404).json({ message: "Informação não encontrada" });
      console.error(err);
    });
};

exports.getName = async (req, res) => {
  if(validaId(res, req.params.id)) return;
  await estados
    .findById(req.params.id)
    .then((estados) => {
      console.log(estados.name);

      if (estados == null) {
        res.status(404).json({ message: "Não localizado" });
      } else {
        res.status(200).json(estados);
      }
    })
    .catch((err) => {
      res.status(404).json({ message: "Nenhum resultado encontrado" });
      console.error(err);
    });
};

exports.postAdd = async (req, res) => {
  if(validarAddUpdt(res, req.body)) return;
  await estados
    .create(req.body)
    .then(() => {
      res.status(200).json({ message: "Estado cadastrada com sucesso." });
    })
    .catch((err) => {
      res.status(400).json({ message: "Erro ao cadastrar" });
      console.error(err);
    });
};

exports.putUpdate = async (req, res) => {
  if(validaId(res, req.params.id)) return;
  if(validarAddUpdt(res, req.body)) return;
  await estados
    .findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res
        .status(200)
        .json({ message: "Dados do estado alterados com sucesso" });
    })
    .catch((err) => {
      res.status(400).json({ message: "Erro ao atualizar" });
      console.error(err);
    });
};

exports.deleteDell = async (req, res) => {
  if(validaId(res, req.params.id)) return;
  await estados
    .findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).json({ message: "Deletado com sucesso" });
    })
    .catch((err) => {
      console.error(err);
      res.status(400).json({ message: "Erro ao deletar" });
    });
};
