<template>
  <div>
    <div>
      <el-card :body-style="{ padding: '0px' }" v-if="orders[index].state == '已完成'" v-for="(item, index) in orders"
        :key="index">
        <div style="padding: 14px;" :key="index">
          <div>
            <span class="name">{{ orders[index].realName }}&nbsp;&nbsp;</span>
            <span class="state">&nbsp;{{ orders[index].state }}&nbsp;</span>
            <br>
          </div>

          <div class="description">

            <div class="subdes">
              <span class="topic"><i style="color:gray; font-size: 20px;">#&nbsp;</i>{{ orders[index].title }}</span>
              <br>
              <span>{{ orders[index].appointTime }}</span>
              <span class="price">{{ orders[index].price }}元</span>
            </div>
            <div class="btns">
              <el-button @click="getExpert(item, index)">查看行家</el-button>
              <el-button @click="CancelVisible = true" v-if="orders[index].state == '进行中'">取消订单</el-button>
              <el-button @click="ConfirmVisible = true" v-if="orders[index].state == '进行中'">完成订单</el-button>
              <el-button @click="linkToComment(), selectedIndex = index"
                v-else-if="orders[index].state == '已完成'">评价订单</el-button>
              <el-button @click="linkToComplaint()" v-else-if="orders[index].state == '已评价'">投诉行家</el-button>

              <el-dialog title="评价" :visible.sync="CommentVisible" width="85%" :before-close="handleClose">
                <el-rate style="margin-bottom: 10px" v-model="mark" show-score></el-rate>
                <el-input type="textarea" v-model="commentContent" placeholder="请输入您的评价"></el-input>
                <div style="margin-top: 20px;">
                  <el-button @click="submitComment" type="primary">提交</el-button>
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
import MakeComment from '../Comments/MakeComment.vue';
import MakeComplaint from '../Complaints/MakeComplaint.vue';
export default {
  name: 'Evaluated',
  components: { MakeComment, MakeComplaint },
  data() {
    return {
      Orders: [],
      CommentVisible: false,
      ComplaintVisible: false,
      CancelVisible: false,
      ConfirmVisible: false,
      userId: "",
      orders: [],
      commentContent: "",
      mark: 0,
    }
  },
  methods: {
    submitComment() {
      let data = new FormData();
      let index = this.selectedIndex;
      data.append('user_id', this.userId);
      data.append('expert_id', this.orders[index].expertId);
      data.append('topic_id', this.orders[index].topicId);
      data.append('order_id', this.orders[index].orderId);
      data.append('text', this.commentContent);
      data.append('score', this.mark);
      var config = {
        method: 'post',
        url: '/review/CreateReview',
        data: data
      };
      axios(config)
        .then(res => {
          if (res.data.status === 100) {
            this.$message({
              message: '评价成功',
              type: 'success'
            });
            this.queryData().then(res => {
              this.orders = res.data.data;
            })
          }
          else {
            this.$message({
              message: '评价失败',
              type: 'error'
            });
          }

          this.CommentVisible = false;
        })
    },
    handleCancleEvent() {
      this.CommentVisible = false;
    },
    linkToCancel() {
      this.CancelVisible = true;
    },
    getExpert(item, index) {
      var id = this.orders[index].expertId;
      this.$router.push(`/ExpertDetailInfo/${id}`);
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
    pullData(){
      this.queryData().then(res => {
      this.orders = res.data.data;
    })
    }
  },
  mounted() {
    this.userId = localStorage.getItem('userId');
    this.queryData().then(res => {
      this.orders = res.data.data;
    })
  },
  activated(){
    pullData();
  }
}
</script>
 
 
<style scoped>
.btns {
  margin-top: 20px;
  text-align: center;

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