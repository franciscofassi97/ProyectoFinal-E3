
// const { fork } = require("child_process");

const randoms = (req, res) => {
  // const cantidad = req.query.cantidad || "100000000";

  // const calculoFork = fork("./calcularRandoms.js")
  // calculoFork.send(cantidad)
  // calculoFork.on("message", (numeros) => {
  //   res.send(numeros)
  // })
  res.send({ hola: 'Hola desde random comentado' })
}


module.exports = { randoms }


