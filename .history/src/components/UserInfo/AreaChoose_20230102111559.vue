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
              label: '石家庄市',
            }, {
              value: '2',
              label: '唐山市',
            }, {
              value: '3',
              label: '秦皇岛市',
            }, {
              value: '4',
              label: '邯郸市',
            }, {
              value: '5',
              label: '邢台市',
            }, {
              value: '6',
              label: '保定市',
            }, {
              value: '7',
              label: '张家口市',
            }, {
              value: '8',
              label: '承德市',
            }, {
              value: '9',
              label: '沧州市',
            }, {
              value: '10',
              label: '廊坊市',
            }, {
              value: '11',
              label: '衡水市',
            }, ]
                    },
                    {
            value: '6',
            label: '山西省',
            children: [{
              value: '1',
              label: '太原市',
            }, {
              value: '2',
              label: '大同市',
            }, {
              value: '3',
              label: '阳泉市',
            }, {
              value: '4',
              label: '长治市',
            }, {
              value: '5',
              label: '晋城市',
            }, {
              value: '6',
              label: '朔州市',
            }, {
              value: '7',
              label: '晋中市',
            }, {
              value: '8',
              label: '运城市',
            }, {
              value: '9',
              label: '忻州市',
            }, {
              value: '10',
              label: '临汾市',
            }, {
              value: '11',
              label: '吕梁市',
            }, ]
                    },
                    {
            value: '7',
            label: '台湾省',
            children: [{
              value: '1',
              label: '石家庄市',
            }, {
              value: '2',
              label: '唐山市',
            }, {
              value: '3',
              label: '秦皇岛市',
            }, {
              value: '4',
              label: '邯郸市',
            }, {
              value: '5',
              label: '邢台市',
            }, {
              value: '6',
              label: '保定市',
            }, {
              value: '7',
              label: '张家口市',
            }, {
              value: '8',
              label: '承德市',
            }, {
              value: '9',
              label: '沧州市',
            }, {
              value: '10',
              label: '廊坊市',
            }, {
              value: '11',
              label: '衡水市',
            }, ]
          },
                    {
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