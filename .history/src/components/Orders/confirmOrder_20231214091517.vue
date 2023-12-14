<template>
  <div>
    <span class="name">&nbsp;行家：{{ name }}&nbsp; </span>
    <br>
    <br>
    <span>选择话题&nbsp;&nbsp;</span>
    <el-select v-model="value" placeholder="请选择">
      <el-option v-for="item in topics" :key="item.topicId" :label="item.title" :value="item.order">
      </el-option>
    </el-select>
    <br>
    <div v-for="(item, index) in topics" :key="item.topicId" v-if="index === value" class="inFo" style="">
      <span>咨询详情</span><br><br>
      <el-card>
        <span>价格: {{ item.price }}元</span>
        <br>
        <span>方式: {{ item.way }}</span>
        <el-date-picker
          v-model="date_time"
          type="datetime"
          placeholder="预约咨询时间"
          :picker-options="pickerOptions"
          value-format="yyyy-MM-dd HH:mm:ss"
        >
        </el-date-picker>
      </el-card>
      <br>
      <div class="btns">
        <el-button @click="confirmOrder(index)">确认支付</el-button>
      </div>
      <el-dialog title="订单创建成功！" width="95%" :visible.sync="ConfirmVisible" :before-close="handleClose" :modal-append-to-body="false">
        <el-button primary @click="linkToOrder">确定</el-button>
      </el-dialog>
    </div>
  </div>
</template>
  
<script>
import axios from 'axios';
export default {
  props: {
    "expert_id": { type: String, default: "" },
    "name": { type: String, default: "" }
  },
  data() {
    return {
      pickerOptions:{
          disabledDate(time) {
            return time.getTime() < Date.now();
          },
        },
      value: '',
      topics: [],
      orders: [],
      userId: "",
      name: "",
      ConfirmVisible: false,
      date_time:''
    }
  },
  mounted() {
    this.userId = localStorage.getItem('userId');
    this.getTopics();
    this.getName();
  },
  methods: {
    linkToOrder() {
      this.$router.push('/OrdersScreen');
    },
    confirmOrder(index) {
      var data={
        customer_id:this.userId,
        expert_id:this.expert_id,
        topic_id:this.topics[index].topicId,
        appoint_time:this.date_time,
        price:this.topics[index].price,
      }
      var config = {
        method: 'post',
        url: '/order/CreateOrder',
        data: data
      }
      var that = this;
      axios(config)
        .then((res)=> {
          that.ConfirmVisible = true;  
         // that.$emit('close',false);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    handleClose(done) {
      done();
    },
    async getName() {
      var data = new FormData();
      data.append("userId", this.expert_id);
      var config = {
        method: 'post',
        url: '/expert/getOne',
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
      data.append("expertId", this.expert_id);
      var config = {
        method: 'get',
        url: '/topic/getById',
        params: {
          expertId: this.expert_id
        }
      }
      var that = this;
      await axios(config)
        .then(function (response) {
          that.topics = response.data.data;
          var length = that.topics.length;
          for (var i = 0; i < length; i++) {
            that.topics[i].order = i;
            if (that.topics[i].way == '0')
              that.topics[i].talkingway = '线上';
            else if (that.topics[i].way == '1')
              that.topics[i].talkingway = '线下';

            console.log("这是topics" + that.topics[i].order);
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
.btns {
  text-align: center;
}

.name {
  font-size: 20px;
  margin: 12px;
  background-color: cadetblue;
  color: white;
  border-radius: 4px;
  height: 30px;
  line-height: 30px;
}

.inFo {
  margin-top: 15px;
  text-align: center;
  margin-left: 5px;
  font-size: 16px;
}

.el-card {
  text-align: left;
  padding-left: 40px;
  padding-right: 40px;
  width: 70%;
}
</style>