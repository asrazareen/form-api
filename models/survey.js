const mongoose = require("mongoose"); //call package

const surveySchema = new mongoose.Schema(
  {
    name: {type: String, require: true},
    startDate: {type: Date,require: true},
    endDate: {type: Date,require: true,},
    description: {type: String,require: true,},
    otherCriteria: {type: String,require: true,},
    typeOfSurvey: {type: String,require: true,},
    user:{type:String}
    // image:{type:String, required:true},
  }, 
  { timestamps: true }
);
const surveyModel = mongoose.model("survey", surveySchema);

module.exports = surveyModel