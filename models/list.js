var mongoose=require("mongoose");
var Schema=mongoose.Schema;
var myappSchema=new Schema({
    "title":String,
    "price":String,
    "unit":String,
    "describe":String,
    "brand":String,
    "pic":Array
});
module.exports=mongoose.model("list",myappSchema,"list")