const mongoose = require("mongoose");
// 建文章信息表
module.exports = mongoose.model("articleInfo",new mongoose.Schema({
    tags: {type: String,required: true},
}));