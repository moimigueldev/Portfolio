require('dotenv').config({
    path:"./.env"
});

let express = require("express");
let router = express.Router();
let path = require("path");
let bodyParser = require("body-parser");
let request = require("request");
let nodemailer = require("nodemailer");


router.get("/", (req, res) => {
    console.log("Main URL Hit");

    res.send(path.resolve("src/index.html"));
});//end of get



let transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
        user:process.env.EMAIL,
        pass:process.env.EPASSWORD
    }
});//end of transporter



router.post('/', (req, res) => {
 
    let msg = req.body;

    let mailOptions = {
        from:msg.email,
        to: process.env.EMAIL,
        subject:"New Messge From"+ msg.name+ " " + msg.email+"",
        text:'New Message',
        html:"<p>"+ msg.message +"</p>"
    };//


    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log('mail not send', error);
          // return console.log(error);
        } else {
            console.log('mail send');
          
        }
      });

    res.sendStatus(200);
});//end of post





module.exports = router;
