const mongoose = require('mongoose');

const User = new mongoose.Schema({
    name: {type:String , require: true},
    email: {type:String , require: true , unique: true}, 
    phone:{type:Number, require:true},
    profession:{type:String , require: true},
    password: {type:String || Number, require: true},
    confirmpassword:{type:String, require:true},
},{collection: 'RegisterUsers',timestamps:true}
)

const model = mongoose.model('RegisterUsers' , User);

module.exports = model;