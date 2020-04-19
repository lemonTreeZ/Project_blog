const express = require("express");
const userDB = require("../../db/user");
const crypto = require("crypto");

let router = express.Router();

/*登陆*/
router.post('/',(req,res)=>{
  let {user,pwd} = req.body;

  userDB.findOne({user})
    .then(data=>{
      if (data) {

        /*有这个用户*/

        /*验证密码*/
        if (data.pwd === crypto.createHash("sha256").update(pwd).digest("hex")) {
          /*密码对*/

          /*验证管理员权限*/
          if (data.admin){
            /*是管理员*/

            //写入session
            req.session.login = data;

            res.send({
              code : 0,
              msg : "登陆成功"
            })
          }else{
            /*不是管理员*/
            res.send({
              code : 1,
              msg : "您不是管理员，无法登陆"
            })
          }

        }else{
          /*密码错*/
          res.send({
            code : 1,
            msg : "密码错误"
          })
        }

      }else{

        /*没有这个用户*/
        res.send({
          code : 1,
          msg : "用户不存在"
        })
      }

    })
    .catch((e)=>{
      console.log(e);
      res.send({
        code:4,msg:"服务器错误~"
      })
    })
})

/*验证登陆*/
router.post("/ifLogin",(req,res)=>{
  /*判断session*/
  if (req.session.login && req.session.login.admin) {
    res.send({
      code : 0,
      msg : "已登录",
      data : req.session.login
    });
  }else{
    res.send({
      code : 1,
      msg : "未登录登录",
      data : null
    });
  }
});


module.exports = router;
