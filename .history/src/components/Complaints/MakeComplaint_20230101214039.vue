<template>
  <div>
      <el-form :model="form">
  <el-form-item label="投诉内容" :label-width="formLabelWidth">
    <el-input type="textarea" v-model="form.name" autocomplete="off"></el-input>
  </el-form-item>
</el-form>
<div style="margin-left:0px;">
        <div style="text-align:center;" slot="footer" class="dialog-footer">
      <br>
  <el-button @click="dialogFormVisible = false">取 消</el-button>
  <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
  </div>
  </div>
</template>

<script>
import Test4 from "../Test4.vue";
export default {
  data() {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
        formLabelWidth: '120px',
        fileList: [],
        dialogVisible: false,
      dialogImageUrl: '',
        userId:'',
    };
},
components: {
  Test4,
  },
  methods: {
      handlePicPreview(file){
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
handleRemove(file, fileList) {
      this.fileList.map((item,index)=>{
        if(item.uid==file.uid){
          this.fileList.splice(index,1)
        }
      })
    },
beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${ file.name }？`);
    },

    ConfirmComment() {
        console.log(this.form.name);
        
        console.log("直接跳转到订单页");
        console.log("您已完成投诉！");//改成弹窗提示
        var data = new FormData();
        data.append('Order_id', "13231241241");
        data.append('uese_id', 17587909655);
        data.append('be_user_id',"41D6E7F266C74A7B835D4D43557989");
        data.append('order_id',"13231241241");
        data.append('text',this.form.name);

    var config = {
      method: 'post',
      url: 'http://localhost:8080/complaint/CreateComplaint',
      data: data
    };

    var that = this;

    axios(config)
      .then(function (response) {
        
        console.log("response是"+JSON.stringify(response));
        console.log("response.data是"+JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
      
        this.$router.push('/Home');    

  },
  mounted() {
    this.userId = localStorage.getItem('userId');
    console.log("写评论页面的userId是"+this.userId);
      }
};
</script>

<style scoped lang="less">

/deep/.el-form-item__label {
  text-align: center;
  vertical-align: middle;
  float: left;
  font-size: 14px;
  color: #606266;
  line-height: 40px;
  padding: 0 12px 0 0;
  box-sizing: border-box;
}

.avatar-uploader /deep/ .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  background-color: #fff;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  width: 180px;
  height: 180px;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar-uploader /deep/ .el-upload-list__item {
  overflow: hidden;
  background-color: #fff;
  border: 1px solid #c0ccda;
  border-radius: 6px;
  box-sizing: border-box;
  width: 180px;
  height: 180px;
  margin: 0 8px 8px 0;
  display: inline-block;
}
</style>