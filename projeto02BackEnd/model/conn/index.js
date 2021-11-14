const mongoose = require("mongoose");

async function Conn() {
  await mongoose
    .connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_BASE}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("MongoDB conectado");
    })
    .catch((err) => {
      console.error(err);
    });
}
module.exports = Conn;
