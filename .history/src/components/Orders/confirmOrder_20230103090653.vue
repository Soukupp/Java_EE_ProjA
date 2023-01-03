<template>
    <div>
    <span class="name">行家：{{ name }}</span>
    <br>
    <br>
    <span>选择话题</span>
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
      <span>话题详情</span><br>
      <el-card>
    <span>时间: {{ item.appointTime }}</span><br>
    <span>价格: {{ item.price }}</span><br>
    <span>方式: {{ item.talkingway }}</span>
  </el-card>
  <br>
</div>
    <div class="btns">
<el-button @click="confirmOrder">确认支付</el-button>
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
    confirmOrder() {
      var data = new FormData();
      data.append("customer_id",this.userId);
      data.append("expert_id",this.expert_id);
      data.append("topic_id",this.topicId);
      data.append("appoint_time",this.appointTime);
      data.append("price", this.price);
      console.log(this.userId);
      console.log(this.expert_id);
      console.log(this.topicId);
      console.log(this.appointTime);
      console.log(this.price);

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
  .name{
    font-size:20px;
    margin:12px;
  }
.inFo{
margin-top:15px;
text-align:left; 
margin-left:30px;
font-size:20px;
}

</style>