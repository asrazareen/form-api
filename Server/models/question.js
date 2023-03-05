const mongoose = require("mongoose");
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId;

const questionSchema = new Schema({
   questions:{type:Array},
   option:{type:Array}, 
   surveyId:{type:String}
//    questionType:{type:String},
//    options:{type:Array},
//    answer:{type:String}
},{timestamps:true})

const questionModel = mongoose.model("questions" , questionSchema) 
  
module.exports = questionModel 