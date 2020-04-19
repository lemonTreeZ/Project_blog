const express = require("express");
const linksDB = require("../../db/links");

let router = express.Router();

//请求友链
router.get("/",(req,res)=>{
  linksDB.find({})
    .then(data=>{
      res.send({
        code : 0,
        msg : "请求成功",
        data
      });
    })
    .catch(()=>{
      res.send({
        code : 4,
        msg : "服务器错误",
        data : []
      });
    })
});

//发表友链
router.post("/submit",(req,res)=>{
  let options = req.body;

  //存数据
  linksDB.create(options)
    .then(()=>{
      res.send({
        code : 0,
        msg : "发表成功"
      });
    })
    .catch(()=>{
      res.send({
        code : 4,
        msg : "服务器错误"
      });
    })

});

//删除友链
router.post("/delete",(req,res)=>{
  let {_id} = req.body;

  linksDB.deleteOne({_id})
    .then(()=>{
      res.send({
        code : 0,
        msg : "请求成功"
      })
    })
    .catch(()=>{
      res.send({
        code:4,msg:"服务器错误~"
      })
    })
})

module.exports = router;
