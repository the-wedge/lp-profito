export default function (req, res) {
    require('dotenv').config()

    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
      port: 465,     
      host: "smtp.gmail.com",
         auth: {
              user: 'profito.api@gmail.com',
              pass: process.env.password,
           },
      secure: true,
    });
    
    const mailData = {
        from: 'profito.api@gmail.com',
        to: 'marcelo@thewedge.com.br',
        subject: `Novo lead da landingpage da Profitto | ${req.body.name}`,
        text: req.body.name + " | Enviado por: " + req.body.email,
        html: `<h3> Recebemos um novo lead vindo da lp, seguem abaixo os dados: <p>Nome: ${req.body.name}</p><p>Email: ${req.body.email}</p><p>Telefone: ${req.body.phone}</p>`
    }
  
    transporter.sendMail(mailData, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info);
    })
      
    console.log(req.body)
    res.send('success')
  }