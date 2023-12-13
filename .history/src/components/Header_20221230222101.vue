<template>
    <el-container class="home-container">
        <el-header><!-- 头部区 -->
            <div>
                <img src="https://cdn.pixabay.com/photo/2013/07/12/18/20/santa-claus-153309__480.png" alt="" height="50px"/>
                <span>对询——大学生一对一咨询服务平台</span>
            </div>
            <el-button type="info" @click="logout">退出</el-button>
        </el-header>
        <!-- 页面主体区域 -->
        <el-container>
            <!-- 侧边栏 -->
            <el-aside width="200px">侧边栏</el-aside>
            <!-- 右侧内容主体 -->
            <el-main>这里放一个网站标语</el-main>
        </el-container>
    </el-container>
</template>
 
<script>
export default {
    methods:{
        logout(){
            window.sessionStorage.clear();
            this.$router.push('/login');
        }
    }
};
</script>
 
<style lang="less" scoped>
.home-container{
    height: 100%;
}
 .el-header{
     background-color: #373d41;
     display: flex; //设置显示为flex布局
     justify-content: space-between;//设置为flex左右布局
     padding-left: 0;//左内边距为0（Logo贴左边）
     align-items: center;//元素上下居中（防止右边按钮贴上下边）
     color: #fff;
     font-size: 20px;
     > div {//内嵌的div样式
         display: flex;
         align-items: center;//Logo和文字上下居中
         span {
             margin-left: 15px;//文字左侧设置间距，防止与Logo紧贴
         }
     }
 }
  .el-aside{
     background-color: #333744;
 }
  .el-main{
     background-color: #eaedf1;
 }
</style>