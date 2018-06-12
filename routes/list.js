var express=require("express");
var router=express.Router();
var mongoose=require("mongoose");
var list=require('../models/list');
mongoose.connect('mongodb://root:Song19931008@139.199.77.243:27017/myapp')
mongoose.connection.on("connected",function () {
    console.log("连接成功")
});
mongoose.connection.on("error",function () {
    console.log("连接失败")
});
mongoose.connection.on("disconnected",function () {
    console.log("连接中断")
});
router.get("/",function(req,res,next){
    res.send('111')
})
module.exports=router