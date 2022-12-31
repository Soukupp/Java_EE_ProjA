<template>
  <div class="personalCenter">
    <el-dialog :visible.sync="examineBtn"> 
          姓名
          <el-input
            v-model="input5"
            type="text"
            placeholder="请输入您的姓名"
            show-word-limit
          ></el-input>
        性别
        <br/>
          <el-select v-model="value" placeholder="请选择您的性别">
          <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
          </el-option>
          </el-select>
          <br/>
          职业
          <el-input 
          v-model="input7" 
          type="text"
          placeholder="请输入您的职业">
          </el-input>
          学校
          <el-input
            v-model="input8"
            type="text"
            placeholder="请输入您的学校"
            maxlength="20"
            show-word-limit
          ></el-input>
          地区
          <el-input
            v-model="input9"
            type="text"
            placeholder="请输入您的地区"
            maxlength="100"
            show-word-limit
          ></el-input>
          年龄
          <el-input
            v-model="input10"
            type="number"
            placeholder="请选择您的年龄"
            show-word-limit
          ></el-input>
          <el-button-group style="float: right; padding: 8px 0" type="text">
            <el-button type="primary" size="medium" round>保存</el-button>
            <br/>
          </el-button-group>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: 'PersonalCenter',
    data() {
        return {
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
            }]
      }
    },
    methods: {
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
  }
</script>

<style scoped>
</style>

