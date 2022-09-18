const nodemailer = require('nodemailer');
const { MAIL } = require('../config')

const transport = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: 'antonetta.legros@ethereal.email',
    pass: 'eTKxRTRVHdBY2gxTat'
  }

});

// transport.sendMail({
//   from: 'Francsico <francisco@coder.com>',
//   to: 'antonetta.legros@ethereal.email',
//   html: "<h1>El mail</h1>",
//   subject: 'Mail de prueba'
// }).then((result) => {
//   console.log(result)
// }).catch(console.log());


const sendEmailOnRegistro = (from) => {
  transport.sendMail({
    from: `New User  <${from}>`,
    to: MAIL,
    html: `<h1>Se registro un usuario con correo </h1>`,
    subject: 'Usuario registrado'
  }).then((result) => {
    console.log(result)
  }).catch(error => console.log(error));
};

module.exports = { sendEmailOnRegistro }