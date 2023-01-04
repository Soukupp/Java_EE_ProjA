<template>
    <div>
      <Header />
      <el-container style="height:710px;">
        <el-main>
        <el-card>
        <el-descriptions class="margin-top" title="我的行家信息" :column="1" border>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-phone"></i>
              手机号
            </template>
            {{ phone }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-s-custom"></i>
              真实姓名
            </template>
            {{ name }}
          </el-descriptions-item>

          
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-user"></i>
              证件号码
            </template>
            {{ ID }}
          </el-descriptions-item>

          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-data-board"></i>
              职位
            </template>
            {{title}}
          </el-descriptions-item>
  
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-thumb"></i>
              用户评分
            </template>
            {{ rating }}
          </el-descriptions-item>


        </el-descriptions>
      </el-card>
      <div class="btns">
          <br><br>
          <el-button @click="CreateTopicVisible=true">创建话题</el-button>
          <el-button>我的话题</el-button>
          <el-button>我的订单</el-button>
      </div>
      
      </el-main>
    </el-container>
      <userInfoEdit  ref="userInfoEdit"></userInfoEdit>
      <el-container>
        <Footer :num="num"/>
      </el-container>
    </div>
  </template>
  
  <script>
  //个人信息的编辑，涉及到省份和城市接口的调用，先选省份，选好后得到pid再传给city接口才能得到city信息。
  import axios from 'axios';
import Footer from './Footer.vue';
import Header from './Header.vue';
import userInfoEdit from './userInfoEdit.vue';
  export default {
    name: "Info",
    components: {
      userInfoEdit,
      Header,
        Footer
    },
    data() {
      return {
          phone: String,
          name: String,
          province: Number,
          city:Number,
          school: String,
          isExpert: Boolean,
          rating: Number,
          ID: "",
          title:"",
        userId: "",
        userInfo: "",
        num:"third",
      };
    },
    mounted() {
      this.userId = localStorage.getItem('userId');
        console.log("个人信息页面的userId是"+this.userId);
        var data = new FormData();
        data.append("userId", this.userId);
        var config={
          method: 'post',
          url: '/expert/getOne',
          data:data
      }
      var that = this;
        axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
            that.userInfo = response.data.data;
            console.log(that.userInfo);
  
            that.phone = that.userId;
              that.name = response.data.data.realName;
              that.rating = response.data.data.rating;
            that.ID=response.data.data.id;
            that.title=response.data.data.job;
            if (response.data.data.isExpert)
                that.isExpert = "是";
            else that.isExpert = "否";
          })
          .catch(function (error) {
            console.log(error);
          });
  
    },
    methods: {
        edit() {
            console.log("这是edit函数");
            this.$refs.userInfoEdit.init();
        }
    },
  };
  </script>
  
  <style scoped lang="less">
  .img {
    width: 80px;
    height: 80px;
  }
  .btns{
      text-align:center;
  }
  /deep/.el-card {
      border-radius: 4px;
      border: 1px solid #EBEEF5;
      background-color: #FFF;
      overflow: hidden;
      color: #303133;
      transition: .3s;
      width: 100%; 
  }
  .el-container {
  display: block;
  flex-direction: row;
  flex: 1;
  flex-basis: auto;
  box-sizing: border-box;
  min-width: 0;
}
  </style>
  
  
  
  
  