<template>
        <div>
    <div class="block">
        <span class="demonstration">选择地区</span>
        <el-cascader
        v-model="value"
        :options="options"
        @change="handleChange"></el-cascader>
    </div>
    </div>
</template>

  <script>
    export default {
      data() {
        return {
          value: [],
          options: [{
            value: 'zhinan',
            label: '指南',
            children: [{
              value: 'shejiyuanze',
              label: '设计原则',
            }, {
              value: 'daohang',
              label: '导航',
          }, {
            value: 'zujian',
            label: '组件',
            }, {
              value: 'form',
              label: 'Form',
              
            }, {
              value: 'data',
              label: 'Data',
              
            }, {
              value: 'notice',
              label: 'Notice',
              
            }, {
              value: 'navigation',
              label: 'Navigation',
             
            }, {
              value: 'others',
              label: 'Others',
              
            }]
          }, {
            value: 'ziyuan',
            label: '资源',
          }]
        };
      },
      methods: {
        handleChange(value) {
          console.log(value);
        }
      }
    };
  </script>