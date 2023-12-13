<template>
    <div>
        <el-form :model="form">
    <el-form-item label="话题名称" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="话题金额" :label-width="formLabelWidth">
      <el-input v-model="form.price" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="约聊方式" :label-width="formLabelWidth">
    <el-radio-group v-model="radio1">
    <el-radio :label="线上">线上</el-radio>
    <el-radio :label="线下">线下</el-radio>
    <el-radio :label="皆可">皆可</el-radio>
    </el-radio-group>
</el-form-item>

<el-form-item label="约聊方式" :label-width="formLabelWidth">
    <el-radio-group v-model="radio2">
    <el-radio :label="0">心理</el-radio>
    <el-radio :label="1">学业</el-radio>
    <el-radio :label="2">就业</el-radio>
    </el-radio-group>
  </el-form-item>

  </el-form-item>
    
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
  <el-upload class="avatar-uploader"
        ref="otherLicense"
        action
        :auto-upload="false"
        :on-preview="handlePicPreview"
        :on-remove="handleRemove"
        :file-list="fileList"
        :on-change="otherSectionFile"
        list-type="picture-card"
        multiple>
        <i class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" class="avatar">
      </el-dialog>
    </div>
</template>

<script>
import axios from 'axios';
  export default {
    data() {
      return {
        gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
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
      };
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

otherSectionFile(file){
        const typeArr = ['image/png', 'image/gif', 'image/jpeg', 'image/jpg'];
          const isJPG = typeArr.indexOf(file.raw.type) !== -1;
          const isLt3M = file.size / 1024 / 1024 < 3;
          if (!isJPG) {
            this.$message.error('只能是图片!');
            this.$refs.upload.clearFiles();
            this.otherFiles = null;
            return;
          }
          if (!isLt3M) {
            this.$message.error('上传图片大小不能超过 3MB!');
            this.$refs.upload.clearFiles();
            this.otherFiles = null;
            return;
          }
          this.otherFiles = file.raw;
          // FormData 对象
          var formData = new FormData();
          // 文件对象
          formData.append('file', this.otherFiles);
        let config = {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          methods: 'post'
        }
        axios.post("/api/upload/getObjectId",formData,config).then(res=>{
          this.fileList.push(file)
          if(res.data.flag == 'S'){
              this.otherPhotoObj = res.data.data.objectId
              this.otherPhoto = res.data.data.url
              this.otherLicense.push({
                certificationName: this.form.certificationName,
                certificationObj: this.otherPhotoObj,
                certificationUrl: this.otherPhoto
              })
          }else{
            this.$message.error(res.data.message)
          }
        })
      },
    },

  };
</script>

<style scoped lang="less">
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