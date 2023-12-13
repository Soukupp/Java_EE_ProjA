<template>
  <div class="personalCenter" >
    <el-dialog :visible.sync="examineBtn"> 
          姓名
          <el-input
            v-model="input5"
            type="text"
            placeholder="请输入您的姓名"
            show-word-limit
          ></el-input>

          学校
          <el-input
            v-model="input8"
            type="text"
            placeholder="请输入您的学校"
            maxlength="20"
            show-word-limit
          ></el-input>


<AreaChoose @custClick="getCity" />

            <br>
            <br>
            <br>
            <div style="text-align:center;">
            <el-button type="primary" size="medium" round @click="confirmEdit">保存</el-button>
          </div>
    </el-dialog>
  </div>
</template>

<script>
import AreaChoose from './UserInfo/AreaChoose.vue'
import axios from 'axios'
export default {
  components: {
      AreaChoose
    },
    name: 'PersonalCenter',
    data() {
      return {
            pid: "",
            cid:"",
            text: '',
            input1: '',
            input2: '',
            input3: '',
            input4: '',
            input5: '',
            input6: '',
            input7: '',
            input8: '',
            input9: '',
            input10: 0,
            circleUrl:
                'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
            sizeList: ['large'],
            tableData: [
                {
                    date: '2016-05-03',
                    name1: 'Wechat',
                    name2: 'Github',
                },
            ],
            examineBtn: false,
            options: [{
                value: '选项1',
                label: '男'
            }, {
                value: '选项2',
                label: '女'
            }],
            userId:"",
      }
    },
  methods: {
    confirmEdit() {
      var config={
        method: 'post',
        url: 'http://localhost:8080/user/changemyInfo',
        data:data
    }
    var that = this;
      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          that.userInfo = response.data.data;
          console.log(that.userInfo);

          that.phone = that.userId;
          that.name=response.data.data.name;
          that.province=response.data.data.province;
          that.city=response.data.data.city;
          that.school=response.data.data.school;
          if (response.data.data.isExpert)
              that.isExpert = "是";
          else that.isExpert = "否";
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getCity(value1,value2) {
      console.log("这是pid的值" + value1);
      console.log("这是cid的值" + value2);

      },
      handleEdit(index, row) {
        console.log(index, row)
      },
      handleDelete(index, row) {
        console.log(index, row)
      },
      init() {
            console.log("这是详情组件");
            this.examineBtn = true;
      },
  },
  mounted() {
      
    this.userId = localStorage.getItem('userId');
      console.log("个人信息编辑页面的userId是"+this.userId);
    }
  }
</script>

<style scoped lang="less">
.personalCenter{
  font-size:18px;
}


/deep/.el-input__inner {
    -webkit-appearance: none;
    background-color: #FFF;
    background-image: none;
    border-radius: 24px;
    border: 1px solid #DCDFE6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    height: 40px;
    line-height: 40px;
    outline: 0;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
}


/deep/.el-dialog__body {
    padding: 30px 20px;
    color: #606266;
    font-size: 16px;
    word-break: break-all;
}
</style>

