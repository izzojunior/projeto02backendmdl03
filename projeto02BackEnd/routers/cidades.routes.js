const express = require("express");
const router = express.Router();

const cidadesController = require("./../controller/cidades.controller");

router.get("/", (req, res) => {
  res.status(200).json({
    message:
      "Rota por cidade ok.  Escolha entre as opções: ( /listall) ( /listname ) ( add ) ( update ) ( delete )",
  });
});

router.get("/listall", cidadesController.getAll);

router.get("/listall/:id", cidadesController.getName);

router.post("/add", cidadesController.postAdd);

router.put("/update/:id", cidadesController.putUpdate);

router.delete("/delete/:id", cidadesController.deleteDell);

module.exports = router;
