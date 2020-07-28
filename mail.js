const nodemailer = require('nodemailer')
const mailGun = require('nodemailer-mailgun-transport')

const { mailgunApiKey, mailgunDomain } = require('./config')

const auth = {
  auth: {
    api_key: `${mailgunApiKey}`,
    domain: mailgunDomain
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
