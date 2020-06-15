const nodemailer = require('nodemailer')
const mailGun = require('nodemailer-mailgun-transport')

const auth = {
  auth: {
    api_key: '16cc73a878a15c0431d734aac7bce731-1b6eb03d-126cc625',
    domain: 'sandbox186fc5fa81fb48e7a30ad0d446a832da.mailgun.org'
  }
}

const transporter = nodemailer.createTransport(mailGun(auth))

const sendMail = (email, subject, text, cb) => {
  const mailOptions = {
    from: email,
    to: 'exelent.website.email@gmail.com',
    subject,
    text
  }

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) cb(err, null)
    else cb(null, data)
  })
}

module.exports = sendMail
