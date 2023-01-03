<template>
        <el-container>
          <Header />
          <el-container>
              <el-main style="height:710px;">
              <el-card>
                  <link rel="stylesheet icon" href="//at.alicdn.com/t/c/font_3828548_ji2jrn939.css">
                  <span class="name">{{ExpertDetailInfo.realName}}</span>
                  <span class="title">{{ExpertDetailInfo.job}}</span>
                  <div class="infos">
                  <span class="sub"><i class="iconfont icon-dingwei"></i>{{city}}</span>
                  <span class="sub"><i class="iconfont icon-shoucang"></i>{{ExpertDetailInfo.rating}}分</span>
                  <span class="sub">￥{{price}}元</span>
                  </div>
                  <div>
                      <br>
                    <span  class="subtitle">咨询话题</span>
                  <div v-for="(item,index) in topics" :key="'new'+index">
                  <span class="topics"><i style="color:gray; font-size: 20px;">#&nbsp;</i>{{ item.title }}</span>
                  </div>
                </div>
                <br>
                <div>
                    <span  class="subtitle">个人简介</span>
                    <br>
                  <span>{{ ExpertDetailInfo.description }}</span>
                </div>
                <br>
                <span class="subtitle" >用户评价</span>
                  <el-card v-for="(item,index1) in comments" :key="index1">
                 
                  <span>{{ item.userName }}</span>   
                  
                  <span style="float:right;">{{ item.year }}/{{ item.month }}/{{ item.day }}</span>     
                  <br>
                  <div style="margin-top:12px; margin-bottom:8px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ item.text }}</div>    
                  <div style="float:right; margin-bottom:8px;"><Test5 :fatherScore="item.score"/></div>
                  </el-card>
                  <div class="btns">
                      <br>
                      <el-button @click="linkToMessages()" round>前往序聊</el-button>
                    <el-button @click="linkToConfirmOrder()" round>立即咨询</el-button>
                    <el-dialog
            title="订单支付"
            :visible.sync="dialogVisible"
            width="95%"
            :before-close="handleClose">
            <ConfirmOrder :expert_id="expert_id" />
            </el-dialog>

                  </div>
              </el-card>
          </el-main>
          </el-container>
          <Footer :num="num"></Footer>
      </el-container>
</template>


<style scoped lang="less">

.el-card {
    border-radius: 4px;
    border: 1px solid #EBEEF5;
    background-color: #FFF;
    overflow: hidden;
    color: #303133;
    transition: .3s;
    width: 100%;
}

.btns{
    text-align:center;
}
.subtitle{
    font-size:20px;
    height:30px;
    line-height:30px;
}

.topics{
    padding:0px;
    line-height: 28px;
    height:28px;
}

.sub{
    margin-right:12px;
    margin-left:12px;
    color:darkgray;
}
.infos{
    text-align:center;
}
.name{
    width:100%;
    display:inline-block;
    text-align:center;
    height:48px;
    line-height:48px;
    font-size:36px;
    white-space: nowrap; /*强制span不换行*/
    overflow: hidden; /*超出宽度部分隐藏*/
    text-overflow: ellipsis; /*超出部分以点号代替*/
}

.title{
    width:100%;
    display:inline-block;
    text-align:center;
    height:28px;
    line-height:28px;
    font-size:16px;
    white-space: nowrap; /*强制span不换行*/
    overflow: hidden; /*超出宽度部分隐藏*/
    text-overflow: ellipsis; /*超出部分以点号代替*/
    color:darkgray;
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


<script>
import axios from 'axios';
import Footer from '../Footer.vue';
import Header from '../Header.vue';
import ConfirmOrder from '../Orders/confirmOrder.vue';
import Test5 from '../Test5.vue';
export default {
    components: {
        Footer,
        Header,
        Test5,
        ConfirmOrder,
    },
    data() {
        return {
        num:"none",
            ExpertDetailInfo: [],
            dialogVisible: false,
            expert_id: "",
            topics: [],
            comments:[],
            price: Number,
            city:"",
      };
    },
    methods: {
        linkToConfirmOrder() {
            console.log("前往下单页面");

            this.dialogVisible = true;
        },
        linkToMessages() {
            console.log("前往聊天界面");
            
        },
        handleClose(done) {
            done();
        },


        async getTopics() {
            var data = new FormData();
            data.append("expertId",this.expert_id);
            var config = {
            method: 'post',
            url: 'http://localhost:8080/topic/getById',
            data: data
            }
            var that = this;
            await axios(config)
                .then(function (response) {
                    that.topics = response.data.data.topics;
                    that.price = response.data.data.minPrice[0];
                    console.log(that.topics);
         })
         .catch(function (error) {
           console.log(error);
         });
            },


            async getComments() {
            var data = new FormData();
                data.append("expert_id", this.expert_id);
            var config = {
            method: 'post',
            url: 'http://localhost:8080/review/GetReviewByExpertID',
            data: data
            }
            var that = this;
            await axios(config)
                .then(function (response) {
                    that.comments = response.data.data;
                    var length = that.comments.length;
                    for (var i = 0; i < length; i++) {
                        that.comments[i].year = that.comments[i].time[0] + that.comments[i].time[1] + that.comments[i].time[2] + that.comments[i].time[3];
                        that.comments[i].month = that.comments[i].time[4] + that.comments[i].time[5];
                        that.comments[i].day=that.comments[i].time[6] + that.comments[i].time[7];
                    }
         })
         .catch(function (error) {
           console.log(error);
         });
        },

        async getCity() {
            var data = new FormData();
            data.append("userId", this.expert_id);
            console.log(this.expert_id);
            var config = {
            method: 'post',
            url: 'http://localhost:8080/user/myInfo',
            data: data
            }
            var that = this;
            await axios(config)
                .then(function (response) {
                    that.city = response.data.data.city;
                    console.log(that.city);
         })
         .catch(function (error) {
           console.log(error);
         });
            },


        async queryData() {
        var data = new FormData();
        data.append("userId",this.expert_id);
        var config = {
        method: 'post',
        url: 'http://localhost:8080/expert/getOne',
        data: data
            }
        var res = await axios(config)
        return res;
        }, 
  },
    mounted() {
        this.expert_id = this.$route.params.id;
        var that = this;
        this.queryData().then(res => {
        //console.log(res.data.data.topics);
        //that.topics = res.data.data.topics;
            
            that.ExpertDetailInfo = res.data.data;
            console.log(that.ExpertDetailInfo);
            this.getTopics();
            this.getComments();
            this.getCity();
    })
    /*axios.get("https://www.fastmock.site/mock/edc8f6926e9ba279a9e6a85407dd71aa/PointedInquiry/ExpertDetailInfo").then(res => {
        this.ExpertDetailInfo = res.data;
        
        console.log(this.expert_id);
        })*/
    }
}
</script>
