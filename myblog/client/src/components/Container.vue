<template>
  <div id="container">
    <el-container>
        <el-main></el-main>
        <el-aside>
            <!-- 四个模块 -->
            <!-- 搜索 -->
            <div class="search">
                <div class="search-main">
                    <input type="text" v-model="searchInput" placeholder="请输入内容">
                    <i class="el-icon-search"></i>
                </div>
                <div class="search-article">
                    <ul @mouseleave="handleMouseleave">
                        <li @mouseenter="handleMouseenter" v-for = "item in articleTags"><a href="">{{item}}</a></li>
                        <!-- <li><a href="">hahaha</a></li>
                        <li><a href="">xixixi</a></li> -->
                    </ul>
                    <div class="cover" :style="{top:coverTop+'px'}"></div>
                </div>
            </div>
            <!-- 热门 -->
            <div class="hot"></div>
            <!-- 推荐 -->
            <div class="recommend"></div>
            <!-- 访客 -->
            <div class="visitor"></div>
        </el-aside>
    </el-container>
  </div>
</template>

<script>
export default {
    name:"Container",
    data () {
        return{
            // 搜索框数据 v-model
            searchInput : "",
            // 文章分类tags
            articleTags : ["全部文章","个人日记","设计模式","Project—note","Javascript","其他"],
            // cover条的top值
            coverTop:0
        }
    },
    computed:{
        filterArticleTags () {
            return articleTags ;
        }
    },
    methods:{
        handleMouseenter(e){
            this.coverTop = e.target.offsetTop;
      },
        handleMouseleave(){

        }
    }
}
</script>

<style  scoped lang="less">
 #container{
    //  margin会导致外边距合并
    padding-top: 80px;
    width: 100%;
    // 取消鼠标选中效果，太丑
    user-select: none;
    >.el-container{
        box-sizing: border-box;
        width: 100%;
        max-width: 1360px;
        margin: 0 auto;
        padding: 0 50px;
        >.el-aside {
            background-color: aqua;
            width: 300px;
            // height: 1000px;
            // background-color: #fff;
            >.search {
                width: 100%;
                background-color: #fff;
                padding-bottom: 20px;
               .search-main{
                    position: relative;
                    box-sizing: border-box;
                    width: 100%;
                    height: 80px;
                    padding: 20px;
                    background-color: grey;
                    input{
                        width: 100%;
                        height: 40px;
                        border-radius: 20px;
                        border: 0;
                        outline: 0;
                        text-indent: 2em;
                    }
                    i{
                        // position: relative;
                        position: absolute;
                        width: 22px;
                        top:29px;
                        right: 35px;
                        height: 22px;
                        font-size: 18px;
                        line-height: 22px;
                        text-align: right;
                        font-weight: bolder;
                        color: rgb(120, 121, 119);
                        cursor: pointer;
                    }
                }
                .search-article {
                    position: relative;
                    width: 100%;
                    margin-top: 20px;
                    ul {
                        width: 100%;
                        li{
                            position: relative;
                            box-sizing: border-box;
                            z-index: 1;
                            width: 100%;
                            height: 40px;
                            line-height: 40px;
                            padding: 0 30px;
                            a {
                                color:#787977;
                                width:100%;
                                height: 100%;
                                display: block;
                                border-bottom: 1px dotted rgb(245, 169, 70);
                            }
                        }
                    }
                    .cover{
                        box-sizing: border-box;
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 40px;
                        border-right: 5px solid rgb(15, 15, 179);
                        background-color: rgba(65, 15, 247, 0.05);
                        transition: top .3s;
                    }
                }
            }
        }
    }
 }
</style>