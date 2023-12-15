<template>
  <div class="bg">
    <link rel="stylesheet icon" href="//at.alicdn.com/t/c/font_3828548_f8oepiumx94.css">
    <div style="display:flex;background-color: white;">
    <el-input style="flex:8;border-color:rgb(11, 141, 130)" v-model="keywords" ></el-input>
    <el-button  style="flex:1" type="primary" @click="search">搜索</el-button>
    </div>
    <div class="icons">
      <span class="com"  @click="changeView(1)"><i class="iconfont icon-shangyehezuo-copy"></i>
        <div style="text-align:center;">心理</div>
      </span>
      <span class="com" style="margin-left:50px;margin-right:50px;" @click="changeView(2)">
        <i class="iconfont icon-bianji_edit"></i>
        <div style="text-align:center;" >学业</div>
      </span>
      <span class="com" @click="changeView(3)"><i class="iconfont icon-gongzuotai_workbench"></i>
        <div style="text-align:center;" >就业</div>
      </span>
    </div>
    <el-card :body-style="{ padding: '0px' }" v-for="(item, index) in Experts" :key="index">
      <div style="padding: 14px;" :key="index" @click="linkToExpertDetail(item, index)">
        <div>
          <span class="name">{{ item.realName }}&nbsp;&nbsp;</span>
          <span class="type">{{ getTypeText(item.type) }}</span>
          <br>
          <span class="title">{{ item.job }}</span>
        </div>
        <br>
        <el-rate class="rate" v-model=item.rating disabled show-score></el-rate>
        <div class="description">
          <div class="subdes">
            
            <span class="topic" v-for="(subItem, subIndex) in item.topics" :key="subIndex"><br><i
                style="color:gray; font-size: 20px;">#&nbsp;</i>{{ subItem.title }}</span>
                <span class="price">最低价格：{{ item.price }}元/小时</span>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<style scoped lang="less">


.hr_solid {
  border: 0;
  border-top: 1px solid #d0d0d5;
  float: right;
}

/deep/.rate .el-rate__text{
  font-size: 20px;
}

/deep/.rate .el-rate__icon{
  font-size: 24px; /* 自定义星星图标大小 */
  line-height: 24px; /* 保持星星图标居中 */
}

.icons {
  border: 1px;
  padding: 10px;
  border-radius: 2px;
  background-color: white;
  display: flex;
  justify-content: center;
}

.com {
  display: inline-block;
}

.iconfont {
  display: inline-block;
  font-size: 60px;
}

.el-input{
  border-radius: 100px;
}

.psychology {
  display: none;
}

.city {
  color: gray;
}

.name {
  color: black;
  font-size: 20px;
}

.title {
  display: inline-block;
  margin-top: 8px;
  color: gray;
}

.topic {
  padding: 0px;
  margin-top: 60px;
  line-height: 30px;
  font-size:18px;
}

.type {
  display: inline-block;
  float:right;
  margin: 8px;
  padding-left: 8px;
  padding-right:8px;
  border-radius: 8px;
  font-size: 20px;
  background-color: lightblue;
  color: cadetblue;
  text-align: center;
  line-height: 30px;
}

.line_01 {
  padding: 0 20px 0;
  margin: 20px 0;
  line-height: 5px;
  border-left: 250px solid #ddd;
  border-right: 250px solid #ddd;
  text-align: center;
}

.bg {
  width: 100%;
  height: 100vh;
  background-size: 100% 100%;
  background-position: center center;
  background-image: url("../../img/galaxy.jpg");
  overflow: auto;
  position: relative;
}

.price {
  padding: 5px 10px;
  margin-bottom: 15px;
  background-color:rgb(227, 181, 96); /* 松绿色或你喜欢的颜色 */
  color: #fff; /* 文本颜色为白色，确保在背景上清晰可见 */
  font-weight: bold;
  border-radius: 5px;
  font-size: 1em; /* 根据需要调整字体大小 */
  float: right;
}

.rating {
  margin-top: 8px;
  font-size: 24px;
  color: coral;
  float: left;
}

.subdes {
  font-size: 16px;
  margin-bottom: 0px;
}

/deep/.Tname {
  text-align: center;
  font-size: 28px;
}

/deep/.description {
  font-size: 2px;
}

.el-card {
  border-radius: 2px;
  background-color: #FFF;
  overflow: hidden;
  transition: .3s;
  margin-top: 20px;
  height: auto;
}

.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}
</style>

<script>
import axios from "axios";
import Vue from 'vue';
import Vuex from 'vuex';
import Expert from '../expert.vue';
import Test4 from '../Test4.vue';
import Test5 from '../Test5.vue';
Vue.use(Vuex);


export default {
  props:{
  }
  ,
  data() {
    return {
      keywords:"",
      givenValue:2.6,
      Experts: [],
      Topics: [],
      Price: [],
      currentDate: new Date(),
      length: Number,
    };
  },
  components: {
    Expert,
    Test4,
    Test5
  },
  methods: {
    search(){
      console.log(this.keywords);
      const config = {
        url: "/expert/search",
        method:"get",
        params:{
          content: this.keywords
        }
      }
      axios(config).then((res)=>{
        this.Experts = res.data.data;
      }).catch(error=>{
        console.log(error);
      })
    },
    getTypeText(type) {
      switch (type) {
        case 1:
          return "心理";
        case 2:
          return "学业"; 
        case 3:
          return "就业"; 
        default:
          return "未知"; 
      }},
    async queryData() {
      var config = {
        method: 'get',
        url: '/expert/getAll',
        params:{
          type:1
        }
      }
      var res = await axios(config)
      this.Experts = res.data.data
      return res;
    },
    getExpert(item, index) {
      console.log(this.Experts[index].phone);
      var id = this.Experts[index].phone;
      return id;
      /*this.$router.push({
        path: `/expert/${id}`
      })*/
    },
    linkToExpertDetail(item, index) {
      var id = this.getExpert(item, index);
      console.log("跳转到" + id + "对应的行家信息详情");
      this.$router.push(`/ExpertDetailInfo/${id}`);
    },

    async changeView(index) {
      console.log(index);
      const config = {
        url: '/expert/getAll',
        params: {
          type: index
        },
      }
      axios(config).then(
        (res)=> {
          this.Experts = res.data.data;
        }
      )

    },



  },
  mounted() {
    this.queryData().then(res => {
      this.Experts = res.data.data;
    })
  }
}
</script>

<script setup>


</script>