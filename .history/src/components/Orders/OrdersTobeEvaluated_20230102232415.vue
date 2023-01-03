<template>
  <div>    
    <div>
      <el-card :body-style="{ padding: '0px'}" v-if="Orders[index].status==1" v-for="(item,index) in Orders" :key="index">
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
              <el-button @click="linkToCancel()" v-if="Orders[index].status==0">取消订单</el-button>
              <el-button @click="linkToComment()" v-else-if="Orders[index].status==1">评价订单</el-button>
              <el-button @click="linkToComplaint()" v-else-if="Orders[index].status==2">投诉行家</el-button>

              <el-dialog
            title="取消订单"
            :visible.sync="CancelVisible"
            width="95%"
            :before-close="handleClose">
            <span>您确认要取消订单吗？</span>
            <el-button>确定</el-button>
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
 
<script>
import axios from 'axios';
import MakeComment from '../Comments/MakeComment.vue';
import MakeComplaint from '../Complaints/MakeComplaint.vue';
export default {
  name: 'Evaluated',
components:{MakeComment,MakeComplaint},
data() {
  return {
    Orders: [],
    CancelVisible: false,
    CommentVisible:false,
    ComplaintVisible: false,
    orders: [],
    
  }
  },
  methods: {
    linkToCancel() {
      this.CancelVisible = true;      
    },
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
      }
},
  mounted() {
    this.userId = localStorage.getItem('userId');
    console.log("Order页面的userId是"+this.userId);
    this.queryData().then(res => {
      this.orders = res.data.data;
      console.log(this.orders);
    })
  axios.get("https://www.fastmock.site/mock/edc8f6926e9ba279a9e6a85407dd71aa/PointedInquiry/AllOrders").then(res => {
    this.Orders = res.data;
    var length = this.Orders.length;
      for (var i = 0; i < length; i++){
        if (this.Orders[i].status === 0)
        this.Orders[i].s = "进行中";
        else if (this.Orders[i].status === 1)
        this.Orders[i].s = "待评价";
        else if (this.Orders[i].status === 2)
        this.Orders[i].s = "已评价";
      }
      })
  }
}
</script>
 
 
<style scoped>
.btns{
  margin-top:20px;
  text-align:center;

}

.el-button{
  border-radius:10px;
  margin-right:20px;
  margin-left:20px;
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