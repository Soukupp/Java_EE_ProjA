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
                label: '天津市',
                children: [{
                    value: '1',
                    label: '天津市',
                },]
            },
            {
            value: '',
            label: '组件',
            children: [{
              value: 'basic',
              label: 'Basic',
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