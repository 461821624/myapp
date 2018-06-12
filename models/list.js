var mongoose=require("mongoose");
var Schema=mongoose.Schema;
var myappSchema=new Schema({
    "title":String,
    "url":Array
});
module.exports=mongoose.model("list",myappSchema)