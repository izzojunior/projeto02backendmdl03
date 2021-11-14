const express = require("express");
const router = express.Router();

const paisesController = require("./../controller/paises.controller");

router.get("/", (req, res) => {
  res.status(200).json({
    message:
      "Rota país ok. Escolha entre as opções: ( /listall) ( /listname ) ( add ) ( update ) ( delete )",
  });
});

router.get("/listall", paisesController.getAll);

router.get("/listname/:id", paisesController.getName);

router.post("/add", paisesController.postAdd);

router.put("/update/:id", paisesController.putUpdate);

router.delete("/delete/:id", paisesController.deleteDell);

module.exports = router;
