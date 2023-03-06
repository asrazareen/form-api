const mongoose = require("mongoose");
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId;

const profileSchema = new Schema({
   image:{type:String},
   user:{type:String}
},{timestamps:true}
)

const profileModel = mongoose.model("profile" , profileSchema)

module.exports = profileModel 