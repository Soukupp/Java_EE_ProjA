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
            options:
            [{
                value: '1',
                label: '北京市',
                children: [{
                    value: '1',
                    label: '北京市',
                },]
                },
                {
                value: '2',
                label: '天津市',
                children: [{
                    value: '1',
                    label: '天津市',
                },]
            },
            {
                value: '3',
                label: '上海市',
                children: [{
                    value: '1',
                    label: '上海市',
                },]
                    },
                    {
                value: '4',
                label: '重庆市',
                children: [{
                    value: '1',
                    label: '重庆市',
                },]
            },
            {
            value: '5',
            label: '河北省',
            children: [{
              value: '1',
              label: 'Basic',
            }, {
              value: '2',
              label: 'Form',
            }, {
              value: '3',
              label: 'Data',
            }, {
              value: '4',
              label: 'Notice',
            }, {
              value: '5',
              label: 'Navigation',
            }, {
              value: '6',
              label: 'Others',
            }, {
              value: '7',
              label: 'Others',
            }, {
              value: '8',
              label: 'Others',
            }, {
              value: '9',
              label: 'Others',
            }, {
              value: '10',
              label: 'Others',
            }, {
              value: '11',
              label: 'Others',
            }, {
              value: '12',
              label: 'Others',
            }, {
              value: '6',
              label: 'Others',
            }]
          }, {
            value: '6',
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