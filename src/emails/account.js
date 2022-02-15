const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'njakhar3511@gmail.com',
        subject: 'Thanks For Joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app`
    })
}

const sendDeleteEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'njakhar3511@gmail.com',
        subject: 'Sorry to see you going!!',
        text: `We are extremely sad to see you leave, ${name}. Please help us by sending ur feedback for refining our app.`
    })
}

module.exports ={
    sendWelcomeEmail,
    sendDeleteEmail
}