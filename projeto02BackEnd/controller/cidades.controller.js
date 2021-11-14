const cidades = require("../model/cidades");

function validarAddUpdt(res, reqisicao) {
  if (!reqisicao.nome) {
    res.status(400).send({
      message: "NOME inválido. Verifique as informações da requisição no body.",
    });
    return true;
  } else if (!reqisicao.qtdBairros) {
    res.status(400).send({
      message:
        "QTDBAIRROS inválida. Verifique as informações da requisição no body.",
    });
    return true;
  } else if (!reqisicao.populacao) {
    res.status(400).send({
      message:
        "POPULAÇÃO inválida. Verifique as informações da requisição no body.",
    });
    return true;
  } else if (!reqisicao.dtAniversario) {
    res.status(400).send({
      message:
        "DTANIVERSARIO inválida. Verifique as informações da requisição no body.",
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
  await cidades
    .find({})
    .then((cidades) => {
      res.status(200).json(cidades);
    })
    .catch((err) => {
      res.status(404).json({ message: "Informação não encontrada" });
      console.error(err);
    });
};

exports.getName = async (req, res) => {
  if(validaId(res, req.params.id)) return;
  await cidades
    .findById(req.params.id)
    .then((cidades) => {
      console.log(cidades.name);

      if (cidades == null) {
        res.status(404).json({ message: "Não localizado" });
      } else {
        res.status(200).json(cidades);
      }
    })
    .catch((err) => {
      res.status(404).json({ message: "Nenhum resultado encontrado" });
      console.error(err);
    });
};

exports.postAdd = async (req, res) => {
  if(validarAddUpdt(res, req.body)) return;

  await cidades
    .create(req.body)
    .then(() => {
      res.status(200).json({ message: "Cidade cadastrada com sucesso." });
    })
    .catch((err) => {
      res.status(400).json({ message: "Erro ao cadastrar" });
      console.error(err);
    });
};

exports.putUpdate = async (req, res) => {
  if(validaId(res, req.params.id)) return;
  if(validarAddUpdt(res, req.body)) return;
  await cidades
    .findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res
        .status(200)
        .json({ message: "Dados da cidade alterados com sucesso" });
    })
    .catch((err) => {
      res.status(400).json({ message: "Erro ao atualizar" });
      console.error(err);
    });
};

exports.deleteDell = async (req, res) => {
  if(validaId(res, req.params.id)) return;
  await cidades
    .findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).json({ message: "Deletado com sucesso" });
    })
    .catch((err) => {
      console.error(err);
      res.status(400).json({ message: "Erro ao deletar" });
    });
};
