const nodemailer = require('nodemailer')


const sendEmail = async (body) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'roaddestinys@gmail.com ',
            pass: 'exlbmjvttbcxvdan' 
        }
    })

    const mailOptions = {
        from: 'roaddestinys@gmail.com',
        to: `${body.email}`,
        subject: `Resumen de tu reserva en Destinys Road - ${body.name}`,
        text: `Detalles de la reserva`,
        html: `
            <p style="font-weight: bold">Nombre del cliente: <span style="font-weight: normal">${body.name}</span></p>
            <p style="font-weight: bold">Correo electronico: <span style="font-weight: normal">${body.email}</span></p>
            <p style="font-weight: bold">Identificacion: <span style="font-weight: normal">${body.id}</span></p>
            <p style="font-weight: bold">Destino: <span style="font-weight: normal">${body.destino}</span></p>
            <p style="font-weight: bold">Tipo de vehiculo: <span style="font-weight: normal">${body.tipo}</span></p>
            <p style="font-weight: bold">Costo total del servicio: <span style="font-weight: normal">$${body.precio}</span></p>
        
        `
    }

    transporter.sendMail(mailOptions, (err, res) => {
        if (err) {
            console.log(err)
            res.json('Opps error occured')
        } else {
            res.json('thanks for e-mailing me');
        }
    })
}

module.exports = { sendEmail }
