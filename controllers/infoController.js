const args = require('../yargs')
const os = require('os');
const numeroCpu = os.cpus().length;

const recuperarInfo = (_, res) => {
  const info = {
    args: args,
    sistema: process.platform,
    nodeVersion: process.version,
    memory: process.memoryUsage.rss(),
    path: process.cwd(),
    processId: process.pid,
    file: __dirname,
    numeroCpu: numeroCpu,
    heroku: "App despelgada en heroku"
  }


  info.keys = Object.keys(info.args)
  // for (let i = 0; i < 100; i++) {

  //   console.log(i);
  // }
  res.render("info", { info: info })
}


const test = (_, res) => {

  objeto = {
    nombre: "francisco",
    actividad: "Deploy en heroku",

  }

  res.send({ objeto })
}


module.exports = { recuperarInfo, test }