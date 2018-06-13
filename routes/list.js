var express=require("express");
var router=express.Router();
var mongoose=require("mongoose");
var list=require('../models/list');
// mongoose.connect('mongodb://root:Song19931008@139.199.77.243:27017/myapp', {auto_reconnect: true})
mongoose.connect('mongodb://127.0.0.1:27017/myapp')
mongoose.connection.on("connected",function () {
    router.get("/",function(req,res,next){
        list.find({},function(err,doc){
            if(err){
                res.json({
                    status:"-1",
                    msg:err.message
                })
            }else {
                res.json({
                    status:"1",
                    msg:"成功",
                    result:{
                        pno:doc.length,
                        dataList:doc
                    }
                })

            }
        })
    })
});
mongoose.connection.on("error",function () {
    router.get("/",function(req,res,next){
        res.render('error',{title:"404"})
    })
});
mongoose.connection.on("disconnected",function () {
    console.log("连接中断")
});

module.exports=router