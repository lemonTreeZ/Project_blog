
const express = require("express");
const articleDB = require("../../db/article");
const articleInfoDB = require("../../db/articleInfo");

let router = express.Router();

/*文章发表*/
router.post("/add",(req,res)=>{
  let {type,title,tag,content,surface} = req.body;

  //后端数据验证
  if (!type||!title||!tag||!content){
    res.send({
      code : 1,
      msg : "数据不完整",
    });
    return;
  }

  /*数据库存储*/
  articleDB.create(
    surface?{type,title,tag,content,surface}:{type,title,tag,content}
  ).then(d=>{
    res.send({
      code : 0,
      msg : "发表成功"
    })
  }).catch(()=>{
    res.send({
      code : 4,
      msg : "发表失败，请稍后再试"
    })
  })

});

/*文章获取*/
router.get("/get",(req,res)=>{
  let {skip,limit} = req.query;

  articleDB.find({},{},{skip:skip*1,limit:limit*1})
    .then(data=>{
      res.send({
        code : 0,
        msg : "查找成功",
        data
      });
    })
    .catch(r=>{
      console.log(r);
      res.send({
        code : 4,
        msg : "服务器错误",
        data : []
      })
    })
});

/*文章删除*/
router.post("/delete",(req,res)=>{
  let {_id} = req.body;

  /*删*/
  articleDB.remove({_id})
    .then(n=>{
      res.send({
        code : 0,
        msg : "删除成功"
      });
    })
    .catch(e=>{
      res.send({
        code : 4,
        msg : "服务器错误"
      });
    })
});

/*文章更新*/
router.post("/update",(req,res)=>{
  let {_id,options} = req.body;
  /*更新*/
  articleDB.updateOne({_id},options)
    .then(()=>{
      res.send({
        code : 0,
        msg : "更新成功"
      })
    })
    .catch(()=>{
      res.send({
        code : 4,
        msg : "更新失败，服务器错误"
      })
    })
});

/*文章信息获取*/
router.get("/getInfo",(req,res)=>{
  articleInfoDB.findOne({})
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
        data : {tags:[],num:0}
      });
    })
});

module.exports = router;
