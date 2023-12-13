<template>
    <el-container>
          <Header />
          <el-container>
              <el-main style="height:710px;">
                <div v-for="(item,index) in Messages" :key="index">
                  <el-card>
                    <span style="font-size:12px;">{{ item.name }}</span>
                    <span style="float:right; font-size:12px;">时间{{ item.time }}</span>
                    <br>
                    <span style="font-size:18px;">{{ item.content }}</span>
                  </el-card>
              </div>
          </el-main>
          </el-container>
          <Footer :num="num"></Footer>
      </el-container>
  </template>

<script>
import axios from 'axios';
import Footer from '../Footer.vue';
import Header from '../Header.vue';
export default {
    data() {
    return {
      num: "third",
      Messages: [],
      userId
        };
    },
    components: {
        Footer,
        Header,
  },
  mounted() {
    axios.get("https://www.fastmock.site/mock/edc8f6926e9ba279a9e6a85407dd71aa/PointedInquiry/Messages").then(res => {
    this.Messages = res.data;
        console.log(this.Messages);
    })
    this.userId = localStorage.getItem('userId');
    console.log("Message页面的userId是"+this.userId);
    }
}
</script>

<style scoped lang="less">
  
.el-container {
  display: block;
  flex-direction: row;
  flex: 1;
  flex-basis: auto;
  box-sizing: border-box;
  min-width: 0;
}
.el-card__body, .el-main {
   padding: 0px; 
}


.element.style {
  height: 100px;
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

/deep/.home-container{
  height: 100vh;
  width:70%;
}
</style>