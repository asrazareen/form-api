const mongoose = require("mongoose");
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId;

const themeSchema = new Schema({
    user: {type: ObjectId, ref: "User"},
    name:{type:String}
})

const thememodel = mongoose.model("theme" , themeSchema)

module.exports = thememodel
  