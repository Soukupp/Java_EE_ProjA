<template>
  <div>
    <div>
      <el-card :body-style="{ padding: '0px'}" v-if="orders[index].state=='已评价'" v-for="(item,index) in orders" :key="index">
          <div style="padding: 14px;" :key="index">
            <div>
            <span class="name">咨询时间：{{orders[index].realName}}&nbsp;&nbsp;</span>
            <span class="state">&nbsp;{{ orders[index].state }}&nbsp;</span>
            <br>
          </div>

          <div class="description">


            <div class="subdes">
              <span class="topic-span"><i style="color:darkgray; font-size: 20px;">#&nbsp;</i>{{ orders[index].title }}</span>
              <br>
              <span>{{ orders[index].appointTime }}</span>
              <span class="price">{{ orders[index].price }}元</span>
            </div>
            <div class="btns">
              <el-button @click="getExpert(item, index)">查看行家</el-button>
              <el-button @click="cancel(index)" v-if="orders[index].state == '进行中'">取消订单</el-button>
              <el-button @click="confirm(index)" v-if="orders[index].state == '进行中'">完成订单</el-button>
              <el-button @click="linkToComment(index)" v-else-if="orders[index].state == '已完成'">评价订单</el-button>
              <el-button @click="linkToComplaint(index)" v-else-if="orders[index].state == '已评价'">投诉行家</el-button>

              <el-dialog title="取消订单" :visible.sync="CancelVisible" width="95%" :before-close="handleClose">
                <span>您确认要取消订单吗？</span><br><br><br>
                <el-button primary @click="cancelNow(temp)">确定</el-button>
              </el-dialog>

              <el-dialog title="完成订单" :visible.sync="ConfirmVisible" width="95%" :before-close="handleClose">
                <span>您确认订单已完成吗？</span><br><br><br>
                <el-button primary @click="confirmFinish(temp)">确定</el-button>
              </el-dialog>

              <el-dialog title="评价" :visible.sync="CommentVisible" width="95%" :before-close="handleClose">
                <MakeComment :order_id="orders[index].orderId" :expert_id="orders[index].expertId"
                  :topic_id="orders[index].topicId" />

              </el-dialog>

              <el-dialog title="投诉" :visible.sync="ComplaintVisible" width="85%" :before-close="handleClose">
                <el-input type="textarea" v-model="complaintContent" placeholder="请输入您的意见"></el-input>
                <div style="margin-top: 20px;">
                  <el-button @click="submitComplaint" type="primary">提交</el-button>
                  <el-button @click="handleCancleEvent">取消</el-button>
                </div>
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
import { Message } from 'element-ui';
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
      CommentVisible: false,
      ComplaintVisible: false,
      CancelVisible: false,
      ConfirmVisible: false,
      userId: "",
      orders: [],
      selectedIndex: 0,
      complaintContent: "",
    }
  },
  methods: {
    submitComplaint() {
      let userId = localStorage.getItem('userId');
      let data = new FormData();
      let index = this.selectedIndex;
      data.append('Order_id', this.orders[index].orderId);
      data.append('user_id', userId);
      data.append('be_user_id', this.orders[index].expertId);
      data.append('contents', this.complaintContent);

      var config = {
        method: 'post',
        url: '/complaint/CreateComplaint',
        data: data
      };


      axios(config)
        .then((res) => {
          if (res.data.data == 0) {
            this.$message({
              message: '请勿重复投诉',
              type: 'warning'
            });
          }
          else {
            this.$message({
              message: '投诉成功',
              type: 'success'
            });
          }
          this.ComplaintVisible = false;
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    ,
    handleCancleEvent() {
      this.ComplaintVisible = false;
    },
    getExpert(item, index) {
      console.log(this.orders[index].expertId);
      var id = this.orders[index].expertId;
      this.$router.push(`/ExpertDetailInfo/${id}`);
    },
    cancle(index) {

    },
    linkToComment() {
      this.CommentVisible = true;
    },
    linkToComplaint(index) {
      this.ComplaintVisible = true;
      this.selectedIndex = index;
    },
    handleClose(done) {
      done();
    },
    async queryData() {
      var data = new FormData();
      data.append("customer_id", this.userId);
      var config = {
        method: 'get',
        url: '/order/GetOrderByID',
        params: {
          customer_id: this.userId
        },
      }
      var res = await axios(config)
      return res;
    },
  },
  mounted() {
    this.userId = localStorage.getItem('userId');
    this.queryData().then(res => {
      this.orders = res.data.data;
    })
  }
}
</script>

 
<style scoped>
.topic-span {
  width:100%;
  line-height: 36px;
  padding: 4px;
  margin: 1px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  background-color:teal;
  color: #fff;
}

.btns{
  margin-top:20px;
  text-align:center;

}

.el-button {
  border-radius: 10px;
  margin-right: 20px;
  margin-left: 20px;
}

.price {
  font-size: 20px;
  color: red;
  float: right;
}

.topic {
  padding: 0px;
  margin-top: 60px;
  line-height: 28px;
}

.state {
  border-radius: 4px;
  text-align: center;
  line-height: 30px;
  float: right;
  color: forestgreen;
  background-color: lightblue;
  height: 30px;
}

.name {
  color: black;
  font-size: 20px;
}
</style>