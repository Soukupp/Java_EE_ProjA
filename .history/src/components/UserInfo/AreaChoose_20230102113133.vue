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
              label: '台北市',
            }, {
              value: '2',
              label: '高雄市',
            }, {
              value: '3',
              label: '基隆市',
            }, {
              value: '4',
              label: '台中市',
            }, {
              value: '5',
              label: '台南市',
            }, {
              value: '6',
              label: '新竹市',
            }, {
              value: '7',
              label: '嘉义市',
            }, {
              value: '8',
              label: '台北市',
            }, {
              value: '9',
              label: '宜兰县',
            }, {
              value: '10',
              label: '桃园县',
            }, {
              value: '11',
              label: '新竹县',
                },
                {
              value: '12',
              label: '苗栗县',
            }, {
              value: '13',
              label: '台中县',
            }, {
              value: '14',
              label: '彰化县',
            }, {
              value: '15',
              label: '南投县',
            }, {
              value: '16',
              label: '云林县',
            }, {
              value: '17',
              label: '嘉义县',
            }, {
              value: '18',
              label: '台南县',
            }, {
              value: '19',
              label: '高雄县',
            }, {
              value: '20',
              label: '屏东县',
            }, {
              value: '21',
              label: '澎湖县',
            }, {
              value: '22',
              label: '台东县',
                },
                {
              value: '23',
              label: '花莲县',
                },
            ]
                    },
                    {
            value: '8',
            label: '辽宁省',
            children: [{
              value: '1',
              label: '沈阳市',
            }, {
              value: '2',
              label: '大连市',
            }, {
              value: '3',
              label: '鞍山市',
            }, {
              value: '4',
              label: '抚顺市',
            }, {
              value: '5',
              label: '本溪市',
            }, {
              value: '6',
              label: '丹东市',
            }, {
              value: '7',
              label: '锦州市',
            }, {
              value: '8',
              label: '营口市',
            }, {
              value: '9',
              label: '阜新市',
            }, {
              value: '10',
              label: '辽阳市',
            }, {
              value: '11',
              label: '盘锦市',
                },
                {
              value: '12',
              label: '铁岭市',
            }, {
              value: '13',
              label: '朝阳市',
            }, {
              value: '14',
              label: '葫芦岛市',
            },
            ]
                    },
                    {
            value: '9',
            label: '吉林省',
            children: [{
              value: '1',
              label: '长春市',
            }, {
              value: '2',
              label: '吉林市',
            }, {
              value: '3',
              label: '四平市',
            }, {
              value: '4',
              label: '辽源市',
            }, {
              value: '5',
              label: '通化市',
            }, {
              value: '6',
              label: '白山市',
            }, {
              value: '7',
              label: '松原市',
            }, {
              value: '8',
              label: '白城市',
            }, {
              value: '9',
              label: '延边朝鲜族自治州',
            },
            ]
                    },
                    {
            value: '10',
            label: '黑龙江省',
            children: [{
              value: '1',
              label: '哈尔滨市',
            }, {
              value: '2',
              label: '齐齐哈尔市',
            }, {
              value: '3',
              label: '鹤岗市',
            }, {
              value: '4',
              label: '双鸭山市',
            }, {
              value: '5',
              label: '鸡西市',
            }, {
              value: '6',
              label: '大庆市',
            }, {
              value: '7',
              label: '伊春市',
            }, {
              value: '8',
              label: '牡丹江市',
            }, {
              value: '9',
              label: '佳木斯市',
            }, {
              value: '10',
              label: '七台河市',
            }, {
              value: '11',
              label: '黑河市',
                },
                {
              value: '12',
              label: '绥化市',
            }, {
              value: '13',
              label: '大兴安岭地区',
            }, 
            ]
                    },
                    {
            value: '11',
            label: '江苏省',
            children: [{
              value: '1',
              label: '南京市',
            }, {
              value: '2',
              label: '无锡市',
            }, {
              value: '3',
              label: '徐州市',
            }, {
              value: '4',
              label: '常州市',
            }, {
              value: '5',
              label: '苏州市',
            }, {
              value: '6',
              label: '南通市',
            }, {
              value: '7',
              label: '连云港市',
            }, {
              value: '8',
              label: '淮安市',
            }, {
              value: '9',
              label: '盐城市',
            }, {
              value: '10',
              label: '扬州市',
            }, {
              value: '11',
              label: '镇江市',
                },
                {
              value: '12',
              label: '泰州市',
            }, {
              value: '13',
              label: '宿迁市',
            }, 
            ]
                    },

                    {
            value: '12',
            label: '浙江省',
            children: [{
              value: '1',
              label: '杭州市',
            }, {
              value: '2',
              label: '宁波市',
            }, {
              value: '3',
              label: '温州市',
            }, {
              value: '4',
              label: '嘉兴市',
            }, {
              value: '5',
              label: '湖州市',
            }, {
              value: '6',
              label: '绍兴市',
            }, {
              value: '7',
              label: '金华市',
            }, {
              value: '8',
              label: '衢州市',
            }, {
              value: '9',
              label: '舟山市',
            }, {
              value: '10',
              label: '台州市',
            }, {
              value: '11',
              label: '丽水市',
            }, ]
                    },

                    {
            value: '13',
            label: '安徽省',
            children: [{
              value: '1',
              label: '合肥市',
            }, {
              value: '2',
              label: '芜湖市',
            }, {
              value: '3',
              label: '蚌埠市',
            }, {
              value: '4',
              label: '淮南市',
            }, {
              value: '5',
              label: '马鞍山市',
            }, {
              value: '6',
              label: '淮北市',
            }, {
              value: '7',
              label: '铜陵市',
            }, {
              value: '8',
              label: '安庆市',
            }, {
              value: '9',
              label: '黄山市',
            }, {
              value: '10',
              label: '滁州市',
            }, {
              value: '11',
              label: '阜阳市',
                },
                {
              value: '12',
              label: '宿州市',
            }, {
              value: '13',
              label: '巢湖市',
            }, {
              value: '14',
              label: '六安市',
            }, {
              value: '15',
              label: '亳州市',
            }, {
              value: '16',
              label: '池州市',
            }, {
              value: '17',
              label: '宣城市',
            }, 
            ]
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