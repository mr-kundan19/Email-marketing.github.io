var nodemailer = require('nodemailer');
const express=require("express")
const bodyParser=require("body-parser")
const https=require("http")

const app=express();
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("mrkk"))

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kkundan501@gmail.com',
    pass: '9973747625'
  }
});
app.get("/",function(req,res){
    res.sendFile(__dirname + "/signup.html")

  }
)
app.post("/",function(req,res){
  const email=req.body.UserEmail;
  const Firstname=req.body.Fname;
  const Lastname=req.body.Lname;

  console.log(email);
  var mailOptions = {

    from: "kkundan501@gmail.com",
    to:email,
    subject: 'HAPPY INDEPENDENENCE DAY !!!!!! ' + Firstname + " this is an auto bot mail App",
    text: "Thankyou for vist on our mail bot app " + Firstname + " " + Lastname + " don't worry it's not any type of spam " ,
  };




  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      res.sendFile(__dirname + "/sucess.html")
      console.log('Email sent: ' + info.response);

    }
  });

})




app.listen(process.env.PORT || 3000)
