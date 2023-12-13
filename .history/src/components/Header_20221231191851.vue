<template>
    <el-header>
        <div>
            <img src="../img/logo.png" alt="" height="40px"/>
            <span>对询</span>
        </div>
        <el-row>
            <el-col :span="6" style="float:left; width: 150px; text-align:center;height:20px; ">
                <el-input
                type="text"
                prefix-icon="el-icon-search"
                placeholder="请输入"
                style="width: 150px; height:20px;cursor: pointer"
                @keyup.enter.native="getAllKb"
                >
                </el-input>
            </el-col>
        </el-row>
    </el-header>
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
     background-color:darkslategrey;
     display: flex; 
     justify-content: space-between;
     padding-left: 12px;
     align-items: center;
     color: #fff;
     font-size: 24px;
     > div {//内嵌的div样式
         display: flex;
         align-items: center;
         span {
             margin-left: 25px;
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