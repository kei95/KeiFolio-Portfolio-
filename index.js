// @ts-ignore
const bodyParser = require('body-parser');
const express = require("express");
const app = express();
const nodeMailer = require("nodemailer");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/api/form', (req, res) => {
    nodeMailer.createTestAccount((err, account) => {
        const htmlEmail = `
        <h3>Contact Details</h3>
            <ul>
                <li>Name: ${req.body.name}</li>
                <li>Name: ${req.body.email}</li>
            </ul>
        <p>${req.body.message}</p>
        `
        let transporter = nodeMailer.createTransport({
            host: 'smtp.ethereal.email',
            port: '587',
            secure: false,
            auth: {
                user: 'jailyn20@ethereal.email',
                pass: 'GpfSkSkRJEBknc1RB4'
            }
        })

        let mailOptions = {
            from: 'test@testaccount.com',
            to: 'jailyn20@ethereal.email',
            replyTo: 'test@testaccount.com',
            subject: 'New Message',
            text: req.body.message,
            html: htmlEmail
        }
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                return console.log(err)
            } else {
                console.log(`Message send: %s`, info.message)
                console.log(`Message URL: %s`, nodeMailer.getTestMessageUrl(info))
            }
        })

    })
})

const PORT = process.env.PORT||3001;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})