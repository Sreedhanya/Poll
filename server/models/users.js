const mongoose=require('mongoose');
const userSchema=mongoose.Schema({name: String, question:String ,option1: String, option2: String, option3: String, option4:String},{timestamps:true})
mongoose.model("User",userSchema);
