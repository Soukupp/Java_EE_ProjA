<template>
    <div>    
      <div>
      <el-card :body-style="{ padding: '0px'}" v-for="(item,index) in Orders" :key="index">
          <div style="padding: 14px;" :key="index">
            <div>
            <span class="name">{{Orders[index].promoter}}&nbsp;&nbsp;</span>
            <span class="state">&nbsp;{{ Orders[index].s }}&nbsp;</span>
            <br>
            </div>
  
            <div class="description" >

              
              <div class="subdes">
                <span class="topic"><i style="color:gray; font-size: 20px;">#&nbsp;</i>{{Orders[index].orderTopic}}</span>  
                <br>
                <span>{{Orders[index].year}}年{{Orders[index].month}}月{{Orders[index].date}}日{{Orders[index].hour}}时</span>
                <span class="price">{{Orders[index].price}}元</span>
            </div>
            <div class="btns">
              <el-button @click="getExpert(item,index)">查看行家</el-button>
              <el-button @click="CancelVisible=true" v-if="Orders[index].status==0">取消订单</el-button>
              <el-button @click="ConfirmVisible=true" v-if="Orders[index].status==0">完成订单</el-button>
              <el-button @click="linkToComment()" v-else-if="Orders[index].status==1">评价订单</el-button>
              <el-button @click="linkToComplaint()" v-else-if="Orders[index].status==2">投诉行家</el-button>

              <el-dialog
            title="取消订单"
            :visible.sync="CancelVisible"
            width="95%"
            :before-close="handleClose">
            <span>您确认要取消订单吗？</span><br><br><br>
            <el-button primary>确定</el-button>
            </el-dialog>

            <el-dialog
            title="完成订单"
            :visible.sync="ConfirmVisible"
            width="95%"
            :before-close="handleClose">
            <span>您确认订单已完成吗？</span><br><br><br>
            <el-button primary>确定</el-button>
            </el-dialog>


              <el-dialog
            title="评价"
            :visible.sync="CommentVisible"
            width="95%"
            :before-close="handleClose">
            <MakeComment />
            </el-dialog>

            <el-dialog
            title="投诉"
            :visible.sync="ComplaintVisible"
            width="95%"
            :before-close="handleClose">
            <MakeComplaint />
            </el-dialog>

            </div>
            </div>
            
            
            
          </div>
  
        </el-card>
        
      </div>
      <br>
        <br><br>
    </div>
  </template>
   
<style scoped>
.btns{
  margin-top:20px;
  text-align:center;

}

.el-button{
  border-radius:10px;
}
.price{
  font-size:20px;
  color:red;
  float:right;
}
.topic{
    padding:0px;
    margin-top: 60px;
    line-height: 28px;
}
.state{
  border-radius:4px;
  text-align:center;
  line-height: 30px;
  float:right;
  color:forestgreen;
  background-color:lightblue;
  height:30px;
}
.name{
    color:black;
    font-size:20px;
}
</style>

  <script>
import axios from 'axios';
import MakeComment from '../Comments/MakeComment.vue';
import MakeComplaint from '../Complaints/MakeComplaint.vue';
  export default {
  name: 'Evaluated',
  components: {
    MakeComment,
    MakeComplaint,
  },
  data() {
    return {
      Orders: [],
      CommentVisible:false,
      ComplaintVisible: false,
      CancelVisible: false,
      ConfirmVisible:false,
      userId:"",
    }
  },
  methods: {
    getExpert(item, index) {
        console.log(this.Orders[index].expertId);
        var id = this.Orders[index].expertId;
        /*this.$router.push({
          path: `/expert/${id}`
        })*/
    },
    linkToComment() {
      this.CommentVisible = true;
    },
    linkToComplaint() {
      this.ComplaintVisible = true;
    },
    handleClose(done) {
            done();
    },
    async queryData() {
      var data = new FormData();
      data.append("",)
      var config = {
      method: 'post',
        url: 'http://localhost:8080/order/GetOrderByID',
        data: data,
    }
      var res = await axios(config)
      console.log(res.data)
      return res;
    },
  },
  mounted() {
    this.queryData().then(res => {
      this.orders = res.data.data;
      console.log("orders长度是" + this.orders.length);
    })
    axios.get("https://www.fastmock.site/mock/edc8f6926e9ba279a9e6a85407dd71aa/PointedInquiry/AllOrders").then(res => {
          this.Orders = res.data;
      var length = this.Orders.length;
      for (var i = 0; i < length; i++){
        if (this.Orders[i].status === 0)
        this.Orders[i].s = "进行中";
        else if (this.Orders[i].status === 1)
        this.Orders[i].s = "已完成";
        else if (this.Orders[i].status === 2)
        this.Orders[i].s = "已评价";
      }
    })
    this.userId = localStorage.getItem('userId');
    console.log("Order页面的userId是"+this.userId);
    }
  }
  </script>
   

   
 