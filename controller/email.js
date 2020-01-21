const nodemailer = require('nodemailer')

const sendEmail = (req, res) => {
  async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount()
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'magnifyteam@gmail.com', // generated ethereal user
        pass: process.env.password // generated ethereal password
      }
    })
    if (req.body.email) {
      const receiverEmail = req.body.email
      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: 'magnifyteam@gmail.com', // sender address
        to: `${receiverEmail}`, // list of receivers
        subject: 'Magnify', // Subject line
        text: 'Invitation', // plain text body
        html: `<h1>Hello User</h1>
        <p>You have been invite to interview on</p>` // html body
      })
      console.log(info)
      res.send('Email Send')
    } else {
      res.status(404).send('No Email')
    }
  }
  main().catch(console.error)
}

module.exports = { sendEmail }
