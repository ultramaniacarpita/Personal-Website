var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'ultramaniacarpita@gmail.com', // Your email id
        pass: 'onid uxxk mxwx pamv' // Your password
    }
});

var mailOptions = {
    from: 'example@gmail.com>', // sender address
    to: 'ultramaniacarpita@gmail.com', // list of receivers
    subject: 'Email Example', // Subject line
    text: "Hi" //, // plaintext body
    // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
};

var postman = {
    send : function(msg){
        var newMailOptions = {
            from : msg.mail,
            to : mailOptions.to,
            subject: mailOptions.subject,
            text: msg.message
        }
        transporter.sendMail(newMailOptions, function(error, info){
            if(error){
                console.log(error);
                console.log("message not sent " + newMailOptions);
                res.json({yo: 'error'});
            }else{
                console.log('Message sent: ' + info.response);
                res.json({yo: info.response});
            };
        });
    }
}


module.exports = postman;