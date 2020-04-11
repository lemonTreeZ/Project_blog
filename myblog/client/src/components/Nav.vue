<template>
<!-- 导航条 -->
  <div id="nav">
    <div class="nav-main">
      <div class="n-m-logo">langNull</div>
      <div class="n-m-login">
        <el-button type="primary">登陆</el-button>
        <el-button type="success">注册</el-button>
      </div>
      <div class="n-m-nav">
        <ul :class=" 'list'+whichActive">
          <li><router-link to="/">首页</router-link></li>
          <li><router-link to="/blog">博客</router-link></li>
          <li><router-link to="/message">留言</router-link></li>
          <li><router-link to="/daily">日记</router-link></li>
          <li><router-link to="/link">友链</router-link></li>
          <li><router-link to="/about">关于</router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Nav",
        data() {
          // 路由列表
          return{
            routerList:["Home","Blog","Message","Daily","Link","About"]
          }
        },
        computed: {
          // 获取当前路由
          whichActive() {
            let index = this.routerList.indexOf(this.$route.name)
            return index + 1;
          }
        }
    }
</script>

<style lang="less" scoped>
  #nav {
    overflow: hidden;
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    width:100%;
    height: 60px;
    background: linear-gradient(to right, rgb(226, 221, 221),rgb(145, 150, 155));
    border-bottom: 1px solid #e8e9e7;
    >.nav-main {
      box-sizing: border-box;
      width: 100%;
      max-width: 1360px;
      height: 60px;
      margin: 0 auto;
      padding: 0 50px;
      background: linear-gradient(to left, rgba(134, 136, 136, 0), rgb(219, 216, 216));;
      .n-m-logo {
        float:left;
        width: 100px;
        height: 60px;
        line-height: 60px;
        text-align: left;
        color: #777;
        font-size: 40px;
        font-weight: bold;
        font-family: BarbaraHand;
      }
      .n-m-login {
        position: relative;
        float:right;
        width: 122px;
        height: 60px;
        line-height: 60px;
        .el-button{
          padding: 9px 13px;
        }
      }
      .n-m-nav {
        float: right;
        width: 576px;
        height: 60px;
        margin-right: 8%;
        ul {
          width:100%;
          height: 100%;
          display: flex;
          li{
            flex:1;
            a{
              position:relative;
              // box-sizing: border-box;
              display: block;
              width:100%;
              height: 100%;
              text-align: center;
              line-height: 60px;
              color:#212220;
              font-weight: 400;
              font-size: 18px;
              transition: .3s;
              border-bottom: 2px solid #fff;
              &::after {
                position:absolute;
                left:0;
                bottom: 0;
                right: 0;
                margin: 0 auto;
                content: "";
                width:5px;
                height: 2px;
                background-color: #6bc30d;
              }
              &:hover{
                color: #6bc30d;
                &::after {
                  width: 100%;
                }
              }
            }
          }
          &.list1 li:nth-child(1),
          &.list1 li:nth-child(2),
          &.list1 li:nth-child(3),
          &.list1 li:nth-child(4),
          &.list1 li:nth-child(5),
          &.list1 li:nth-child(6){
            a{
              color:#6bc30d;
              &::after {
                width:100%;
              }
            }
          }
        }
      }
    }
    
  }
</style>