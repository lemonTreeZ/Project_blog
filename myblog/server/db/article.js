const mongoose = require("mongoose");
let Schema = mongoose.Schema;
// 建文章表
let article = mongoose.model("article",new mongoose.Schema({
    type : {type: String,required: true},
    title : {type: String,required: true},
    date : {type: Date,default:Date.now()},
    surface: {type: String,default: '/img/001.jpg'},
    content : {type: String,required: true},
    tag: {type: String,required: true},
    pv : {type: Number,default:0},//浏览量
    comment : [
        {type:Schema.Types.ObjectId,ref:"comment"}
    ]
}));
// 假数据
// for (let i=0;i<100;i++){
//     article.create({
//         type : ["原创","转载"][Math.random()*2|0],
//         title : '第${i+1}篇文章',
//         content : (""+i+i+i+i+i+"hahhahha我是一条假数据哦").repeat(10),
//         tag : ["HTML&Css","JAVA","Javascript","NODE","Vue&React","Other"][Math.random()*5|0]
//     });
// }
module.exports = article;