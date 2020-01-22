const nodemailer = require('nodemailer')
const HOME = process.env.HOMEPAGE
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
        // html: `
        // <div style="background-color: #f6f6f6; font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
        // <div style="background-color: #f7f7f7; text-align: center;">
        // <h1>Congratulation</h1>
        // <p style="margin-bottom: 15px;">
        // You have been invite by <b>${req.user.companyName}</b> Company
        // </p>
        // <p>The invitation will take place on ${req.body.date || ' - '}</p>
        // <p style="margin-bottom: 15px;">
        // Address : ${req.body.address || ' - '}</p>
        // <p style="margin-bottom: 15px;">
        // Good luck! On your Interview.
        // </p>
        // </div>
        // </div>` // html body
        html: `<!DOCTYPE html>
            <html>
              <head>
                <meta name="viewport" content="width=device-width">
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
                <title>Magnify</title>
                <style>
            @media only screen and (max-width: 620px) {
              table[class='body'] h1 {
                font-size: 28px !important;
                margin-bottom: 10px !important;
              }

              table[class='body'] p,
            table[class='body'] ul,
            table[class='body'] ol,
            table[class='body'] td,
            table[class='body'] span,
            table[class='body'] a {
                font-size: 16px !important;
              }

              table[class='body'] .wrapper,
            table[class='body'] .article {
                padding: 10px !important;
              }

              table[class='body'] .content {
                padding: 0 !important;
              }

              table[class='body'] .container {
                padding: 0 !important;
                width: 100% !important;
              }

              table[class='body'] .main {
                border-left-width: 0 !important;
                border-radius: 0 !important;
                border-right-width: 0 !important;
              }

              table[class='body'] .btn table {
                width: 100% !important;
              }

              table[class='body'] .btn a {
                width: 100% !important;
              }

              table[class='body'] .img-responsive {
                height: auto !important;
                max-width: 100% !important;
                width: auto !important;
              }
            }
            @media all {
              .ExternalClass {
                width: 100%;
              }

              .ExternalClass,
            .ExternalClass p,
            .ExternalClass span,
            .ExternalClass font,
            .ExternalClass td,
            .ExternalClass div {
                line-height: 100%;
              }

              .apple-link a {
                color: inherit !important;
                font-family: inherit !important;
                font-size: inherit !important;
                font-weight: inherit !important;
                line-height: inherit !important;
                text-decoration: none !important;
              }

              #MessageViewBody a {
                color: inherit;
                text-decoration: none;
                font-size: inherit;
                font-family: inherit;
                font-weight: inherit;
                line-height: inherit;
              }

              .btn-primary table td:hover {
                background-color: #34495e !important;
              }

              .btn-primary a:hover {
                background-color: #34495e !important;
                border-color: #34495e !important;
              }
            }
            </style>
              </head>
              <body class="" style="background-color: ##6190e8; font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                <span class="preheader" style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;">You have been invited to interview 🎊🎊</span>
                <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f6f6f6; width: 100%;" width="100%" bgcolor="#f6f6f6">
                  <tr>
                    <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">
                      &nbsp;
                    </td>
                    <td class="container" style="font-family: sans-serif; font-size: 14px; vertical-align: top; display: block; max-width: 580px; padding: 10px; width: 580px; margin: 0 auto;" width="580" valign="top">
                      <div class="content" style="box-sizing: border-box; display: block; margin: 0 auto; max-width: 580px; padding: 10px;">
                     
                        <table role="presentation" class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background: #ffffff; border-radius: 3px; width: 100%;" width="100%">

                          <tr>
                            <td class="wrapper" style="font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;" valign="top">
                              <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                                <tr>
                                  <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">
                                    <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">
                                    <b>Congratulation Magnify User</b>
                                    </p>
                                    <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">
                                      You have been invite to interview with <b>${
                                        req.user.companyName
                                      }</b> Company on <b>
                                      ${req.body.date || ' - '}</b>
                                    </p>
                                    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                                      <tbody>
                                        <tr>
                                          <td align="left" style="font-family: sans-serif; font-size: 14px; vertical-align: top; padding-bottom: 15px;" valign="top">
                                            <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: auto;">
                                              <tbody>
                                                <tr>
                                                  <td style="font-family: sans-serif; font-size: 14px; vertical-align: top; border-radius: 5px; text-align: center; background-color: #3498db;" valign="top" align="center" bgcolor="#3498db">
                                                    <span style="border: solid 1px #3498db; border-radius: 5px; box-sizing: border-box; cursor: pointer; display: inline-block; font-size: 14px; font-weight: bold; margin: 0; padding: 12px 25px; text-decoration: none; text-transform: capitalize; background-color: #3498db; border-color: #3498db; color: #ffffff;">Magnify</span>
                                                  </td>
                                                </tr>                     
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>        
                                    <p> <b>visit magnify</b> : ${HOME}</p>
                                    <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">
                                      The Address will be at :
                                      <b>${req.body.address || ' - '}</b>
                                    </p>
                                    <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">
                                      Good luck! On your Interview.
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>

                   
                        </table>

        
                        <div class="footer" style="clear: both; margin-top: 10px; text-align: center; width: 100%;">
                          <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                            <tr>
                              <td class="content-block" style="font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; color: #999999; font-size: 12px; text-align: center;" valign="top" align="center">
                                <span class="apple-link" style="color: #999999; font-size: 12px; text-align: center;">Company Inc, Magnify , Melbourne 94102. tel:09999999</span>
                                <br>
                                Don't like these emails?
                                <span style="text-decoration: underline; color: #999999; font-size: 12px; text-align: center;">Unsubscribe</span>.
                              </td>
                            </tr>
                          </table>
                        </div>
                  
                      </div>
                    </td>
                    <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">
                      &nbsp;
                    </td>
                  </tr>
                </table>
              </body>
            </html>
            ` //amp
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
