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
          地区
          <el-input
            v-model="input9"
            type="text"
            placeholder="请输入您的地区"
            maxlength="100"
            show-word-limit
          ></el-input>
          <div>
       <el-select clearable  placeholder="请选择省份" v-model="province">
            <el-option v-for="item in areas" :key="item.code" :value="item.name" :lable="item.name"></el-option>
       </el-select>
       <el-select clearable  :disabled="!province" style="margin:0 20px" placeholder="请选择城市" v-model="city">
            <el-option v-for="item in selectCity" :key="item.code" :value="item.name" :lable="item.name"></el-option>
       </el-select>
       <el-select clearable  :disabled="!province || !city"   placeholder="请选择区域" v-model="area">
            <el-option v-for="item in selectArea" :key="item.code" :value="item.name" :lable="item.name"></el-option>
       </el-select>
    </div>
            <br>
            <br>
            <br>
            <div style="text-align:center;">
            <el-button type="primary" size="medium" round>保存</el-button>
          </div>
    </el-dialog>
  </div>
</template>

<script>
import { computed, ref,watch } from 'vue'
import allAreas from '../lib/pc-code.json'

let province = ref<string>('')
// 下拉选择城市的值
let city = ref<string>('')
// 下拉选择区域的值
let area = ref<string>('')
// 所有的省市区数据
let areas = ref(allAreas)

// 城市下拉框所有的值
let selectCity = ref<any[]>([])

// 区域下拉框所有的值
let selectArea = ref<any>([])


// 监听选择省份
watch(()=>province.value,val =>{
    if(val){
        let cities = areas.value.find(item => item.name === province.value)!.children
        selectCity.value = cities
    }
    city.value = ''
    area.value = ''
})
// 监听选择城市
watch(()=>city.value,val =>{
    if(val){
        let area = selectCity.value.find(item => item.name === city.value)!.children
        selectArea.value = area
    }
    area.value = ''
})

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

