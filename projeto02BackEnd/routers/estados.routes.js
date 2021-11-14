const express = require("express");
const router = express.Router();

const estadosController = require("./../controller/estados.controller");

router.get("/", (req, res) => {
  res.status(200).json({
    message:
      "Rota por Estado ok. Escolha entre as opções: ( /listall) ( /listname ) ( add ) ( update ) ( delete )",
  });
});

router.get("/listAll", estadosController.getAll);

router.get("/lista/:id", estadosController.getName);

router.post("/lista", estadosController.postAdd);

router.put("/lista/:id", estadosController.putUpdate);

router.delete("/lista/:id", estadosController.deleteDell);

module.exports = router;
