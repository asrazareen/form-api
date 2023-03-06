const express = require("express");
const PORT = 8080 || process.env.PORT;
const mongoose = require("mongoose");
require('dotenv').config()
const profile = require("./models/profile")
const theme = require("./models/theme")
const cors = require("cors");
const datas = require("./data")
const jwt = require("jsonwebtoken")
const Questions = require("./routes/question")
const UserRoutes = require("./routes/user")
const secret = "MAINPROJECT"

const app = express();
app.use(express.json());
app.use(cors())


app.use("/createForm", (req, res, next) => {
  const token = req.headers.authorization;

  if(token){
    
      jwt.verify(token, secret, function(err, decoded) {
          if(err) {
              console.log(err);
             return res.status(403).json({
              status: "Failed", 
              message: "Token is not valid"
              });
          }
          req.user = decoded.data;
        
          next();
        });

  }else {
      res.status(403).json({
          status: "Failed", 
          message: "User is not authenticated"
      })
  }
})

app.get('/api/themes',async  (req, res) => {
//     theme.deleteMany(data.data)
//console.log(datas)
//    theme.insertMany(datas.data)
const data = await theme.find()
    res.json({
        data 
    }
    ); 
  });


 
app.use("/createForm" , Questions)
app.use("/user" , UserRoutes)


mongoose.connect(
  "mongodb+srv://asrazareen:asra1999@cluster1.ydw3gfw.mongodb.net/theme"  ,
   
).then(() => console.log("connected to db"))


app.listen(PORT , () => {console.log(`server is up and running at port number ${PORT}`)})  