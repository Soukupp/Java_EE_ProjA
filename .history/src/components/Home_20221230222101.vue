<template>
    <el-container element.style="height: 100%" class="home-container">
        <el-header><!-- 头部区 -->
            <div>
        <img src="https://cdn.pixabay.com/photo/2022/11/01/20/36/cat-7563332_1280.png" alt="" height="50px"/>
        <span>对询</span>
    </div>
    <el-button type="info" @click="logout">注销登录</el-button>
        </el-header>
        <!-- 页面主体区域 -->
        <el-container>
            <!-- 侧边栏 -->
            <el-aside :width="isCollapse ? '64px' : '200px'">
                <div class="toggle-button" @click="toggleCollapse()">|||</div>
        <el-menu
          background-color="#333744"
          text-color="#fff"
          active-text-color="#ffd04b"
          :collapse="isCollapse" 
          :collapse-transition="false">

          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-goods"></i>
              <span class="submenu">主页</span>
            </template>
          <el-menu-item index="1-1">
                <template slot="title">
                    <span slot="title">心理</span>
                </template>
            </el-menu-item>
            <el-menu-item index="1-2">
                <template slot="title">
                    <span slot="title">学业</span>
                </template>
            </el-menu-item>
            <el-menu-item index="1-3">
                <template slot="title">
                    <span slot="title">就业</span>
                </template>
            </el-menu-item>
        </el-submenu>
          <el-menu-item index="2">
            <template slot="title">
              <i class="el-icon-star-off"></i>
              <span class="submenu">收藏夹</span>
            </template>
          </el-menu-item>
          <el-menu-item index="3" @click="userInfoShow()">
            <template slot="title">
              <i class="el-icon-s-order"></i>
              <span class="submenu" >我的订单</span>
            </template>
          </el-menu-item>
          <el-menu-item index="/UserInfo" >
            <template slot="title">
              <i class="el-icon-user"></i>
              <span class="submenu">个人信息</span>
            </template>
          </el-menu-item>
        </el-menu>
      </el-aside>

            <!-- 右侧内容主体 -->
            <el-main>Topics</el-main>
        </el-container>
    </el-container>
</template>
 


<style lang="less" scoped>
.el-header{
     background-color: #373d41;
     display: flex; 
     justify-content: space-between;
     padding-left: 0;
     align-items: center;
     color: #fff;
     font-size: 20px;
     > div {//内嵌的div样式
         display: flex;
         align-items: center;
         span {
             margin-left: 15px;
         }
     }
 }
 .toggle-button{
  background-color: #4A5064;//背景色(浅灰)
  font-size: 10px;//字体大小10像素
  line-height: 24px;//行高24像素
  color: #fff;//字体颜色白色
  text-align: center;//字体居中
  letter-spacing: 0.2em;//字体之间的距离
  cursor: pointer;//鼠标的形状（手形）
}
 .submenu{
     display:inline-flex;
     text-align:left;
     margin-left:15px;
 }

  .el-aside{
     background-color: #333744;
 }
  .el-main{
     background-color: #eaedf1;
 }

 .home-container{
    height: 100vh;
}
</style>


<script>
import userInfo from './userInfo.vue';
export default {
    data() {
        return{isCollapse: false}
    },
    components: {
        userInfo
    },
    methods:{
        logout(){
            window.sessionStorage.clear();
            this.$router.push('/login');
        },
        //点击按钮，切换菜单的折叠与展开
        toggleCollapse(){
        this.isCollapse = !this.isCollapse;
        },
        userInfoShow() {
            this.$router.push('/userInfo'); 
        }
    }
};
</script>
