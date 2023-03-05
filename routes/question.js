const express = require("express")
const cors = require("cors")
const Question = require("../models/question")
const User = require('../models/user')
const fileUpload = require("express-fileupload")
const survey = require("../models/survey")
// const fileupload = require("express-fileupload"); 
const app = express()
app.use(express.json());
app.use(cors())
app.use(fileUpload())


app.get("/" , async(req,res) => {
    const query = req.query.id
    console.log(query) 
    const questions = await Question.findOne( {_id:query} )
    console.log(questions)
    res.json({
        questions:questions, 
       
    })
})
app.get("/list" , async(req,res) => {

    const userId = req.user;
    console.log(userId)
    const user = await User.findOne({_id:userId})
    console.log(user.name)
    const List = await survey.find({user:req.user})
    console.log(List)
    res.json({
        lists:List
    }) 
})

app.get("/user", async (req, res) => {
    const userid = req.user;
    const user = await User.findOne({ _id: userid });
  res.status(200).json({
    name: user.name,
  });  
});
app.delete("/delete",async(req,res) => {
   
   await survey.deleteOne({_id:req.query.id})
    // console.log(Lists)

    res.json({
     message:"Deleted succesfully"
    }) 
})

app.post("/list",async(req,res) => {
    const {name , description,typeOfSurvey,startDate,endDate,image,otherCriteria} = req.body 
    const user = req.user
    const Lists = await survey.create({
        name , description,typeOfSurvey,startDate,endDate,image,otherCriteria,
        user
    })
    console.log(Lists)

    res.json({
        listId:Lists._id
    }) 
})
app.post("/" , async(req,res) => {
    //console.log(JSON.parse(req.body.questions))
    //console.log(req.body.options)
    console.log(req.body)
    const questions = JSON.parse(req.body.questions) 
    const option = JSON.parse(req.body.option) 
    //console.log(req.body) 
    // console.log(req.body.options)
    // console.log(questions) 
    // console.log(option)    
    //console.log(JSON.parse(req.body.options)) 
   const data =  await Question.create({
        questions:questions,   
        option:option 
    })  
    //console.log(data)
    res.json({ 
        status:"successful",  
        questId:data._id
    })  
   
})

module.exports = app 