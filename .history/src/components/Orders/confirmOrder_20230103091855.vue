<template>
    <div>
    <span class="name">&nbsp;行家：{{ name }}&nbsp; </span>
    <br>
    <br>
    <span>选择话题&nbsp;&nbsp;</span>
    <el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="item in topics"
        :key="item.topicId"
        :label="item.title"
        :value="item.order">
      </el-option>
    </el-select>
    <br>
    <div v-for="(item,index) in topics" :key="item.topicId" v-if="index===value"  class="inFo" style="">
      <span>话题详情</span><br><br>
      <el-card>
    <span>时间: {{ item.appointTime }}</span><br>
    <span>价格: {{ item.price }}</span><br>
    <span>方式: {{ item.talkingway }}</span>
  </el-card>
  <br>
  <div class="btns">
<el-button @click="confirmOrder(index)">确认支付</el-button>
    </div>
</div>

</div>
  </template>
  
  <script>
  import axios from 'axios';
export default {
  props:{
        "expert_id": { type: String, default: "" },
        },
      data() {
        return {
        value: '',
          topics: [],
          orders: [],
          userId: "",
        name:"",
        }
    },
  mounted() {
    this.userId = localStorage.getItem('userId');
    console.log("ConfirmOrder页面的userId是"+this.userId);
    console.log("接受到的expert_id值为" + this.expert_id);
    this.getTopics();
    this.getName();
        /*axios.get("https://www.fastmock.site/mock/edc8f6926e9ba279a9e6a85407dd71aa/PointedInquiry/ExpertTopics").then(res => {
        this.topics = res.data;
            var length = this.topics.length;
            console.log(this.topics);
            for (var i = 0; i < length; i++)
            {
                this.topics[i].value = i;
                this.topics[i].label = this.topics[i].name;
            }
        })*/
    },
  methods: {
    confirmOrder(index) {
      var data = new FormData();
      data.append("customer_id",this.userId);
      data.append("expert_id",this.expert_id);
      data.append("topic_id",this.topicId);
      data.append("appoint_time",this.appointTime);
      data.append("price", this.price);
      console.log(this.userId);
      console.log(this.expert_id);
      console.log(this.topics[index].topicId);
      console.log(this.topics[index].appointTime);
      console.log(this.topics[index].price);

      console.log("准备创建订单！");
            var config = {
            method: 'post',
            url: 'http://localhost:8080/order/CreateOrder',
            data: data
            }
            var that = this;
            axios(config)
                .then(function (response) {
                  that.name = response.data;
         })
         .catch(function (error) {
           console.log(error);
         });
      },
        outputValue() {
            console.log(this.value);
      },
      handleClose(done) {
            done();
      },
      async getName() {
        var data = new FormData();
            data.append("userId",this.expert_id);
            var config = {
            method: 'post',
            url: 'http://localhost:8080/expert/getOne',
            data: data
            }
            var that = this;
            await axios(config)
                .then(function (response) {
                  that.name = response.data.data.realName;
         })
         .catch(function (error) {
           console.log(error);
         });
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
                  var length = that.topics.length;
                  for (var i = 0; i < length; i++){
                    that.topics[i].order = i;
                    if (that.topics[i].way == '0')
                      that.topics[i].talkingway = '线上';
                    else if (that.topics[i].way == '1')
                     that.topics[i].talkingway = '线下';

                    console.log("这是topics"+that.topics[i].order);
                  }
         })
         .catch(function (error) {
           console.log(error);
         });
            },
      }
    }
  </script>

  <style scoped lang="less">

  .btns{
    text-align:center;
  }
  .name{
    font-size:20px;
    margin:12px;
    background-color:cadetblue;
    color:white;
    border-radius:4px;
    height:30px;
    line-height:30px;
  }
.inFo{
margin-top:15px;
text-align:center; 
font-size:16px;
}

.el-card{
  padding-left:40px;
  padding-right:40px;
  width:70%;
}

</style>