const nodemailer = require('nodemailer');
const { PASS, MAIL } = require('../config')

const transport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: MAIL,
    pass: PASS
  }
});

const sendEmailOnRegistro = () => {
  transport.sendMail({
    from: "Nuevo registro de Usuario",
    to: MAIL,
    text: 'Se registro un usuario',
    subject: 'Usuario registrado'
  }).then((result) => {
    console.log(result)
  }).catch(error => console.log(error));
};


module.exports = { sendEmailOnRegistro }