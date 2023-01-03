<template>
    <div>
    <span>咨询行家：xxx</span>
    <br>
    <span>选择话题</span>
    <el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="item in topics"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <br>
    <div v-for="(item,index) in topics" :key="index" v-if="index===value">
    <span>时间{{ item.time }}</span><br>
    <span>价格{{ item.price }}</span><br>
    <span>方式{{ item.way }}</span>
</div>
    <div class="btns">
<el-button>确认支付</el-button>
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
        topics:[],
        }
    },
  mounted() {
    console.log("接受到的expert_id值为" + this.expert_id);
        axios.get("https://www.fastmock.site/mock/edc8f6926e9ba279a9e6a85407dd71aa/PointedInquiry/ExpertTopics").then(res => {
        this.topics = res.data;
            var length = this.topics.length;
            console.log(this.topics);
            for (var i = 0; i < length; i++)
            {
                this.topics[i].value = i;
                this.topics[i].label = this.topics[i].name;
            }
        })
    },
    methods: {
        outputValue() {
            console.log(this.value);
      },
      handleClose(done) {
            done();
      },
      async queryData() {
      var config = {
      method: 'post',
      url: 'http://localhost:8080/expert/getAll'
    }
      var res = await axios(config)
      console.log(res.data)
      this.Experts = res.data.data
      return res;
    },
      }
    }
  </script>