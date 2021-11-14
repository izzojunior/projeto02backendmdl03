const express = require("express");

const app = express();

require("dotenv").config();

const cors = require("cors");

app.use(express.json());

const Conn = require("./model/conn/index");

Conn();

app.use(cors());
app.options("", cors());

app.get("/", (req, res) => {
  res
    .status(200)
    .json({ message: "Escolha entre /paises, /estados, /cidades." });
});

const paisesRouter = require("./routers/paises.routes");
app.use("/paises", paisesRouter);

const estadosRouter = require("./routers/estados.routes");
app.use("/estados", estadosRouter);

const cidadesRouter = require("./routers/cidades.routes");
app.use("/cidades", cidadesRouter);

app.listen(process.env.PORT, () => {
  console.info(`App rodando em http://localhost:${process.env.PORT}`);
});
