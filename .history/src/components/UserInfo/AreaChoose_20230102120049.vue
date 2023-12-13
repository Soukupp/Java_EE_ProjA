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
            value: '14',
            label: '福建省',
            children: [{
              value: '1',
              label: '福州市',
            }, {
              value: '2',
              label: '厦门市',
            }, {
              value: '3',
              label: '莆田市',
            }, {
              value: '4',
              label: '三明市',
            }, {
              value: '5',
              label: '泉州市',
            }, {
              value: '6',
              label: '漳州市',
            }, {
              value: '7',
              label: '南平市',
            }, {
              value: '8',
              label: '龙岩市',
            }, {
              value: '9',
              label: '宁德市',
            }, ]
                    },

                    {
            value: '15',
            label: '江西省',
            children: [{
              value: '1',
              label: '南昌市',
            }, {
              value: '2',
              label: '景德镇市',
            }, {
              value: '3',
              label: '萍乡市',
            }, {
              value: '4',
              label: '九江市',
            }, {
              value: '5',
              label: '新余市',
            }, {
              value: '6',
              label: '鹰潭市',
            }, {
              value: '7',
              label: '赣州市',
            }, {
              value: '8',
              label: '吉安市',
            }, {
              value: '9',
              label: '宜春市',
            }, {
              value: '10',
              label: '抚州市',
            }, {
              value: '11',
              label: '上饶市',
            }, ]
                    },

                    
                    {
            value: '16',
            label: '山东省',
            children: [{
              value: '1',
              label: '济南市',
            }, {
              value: '2',
              label: '青岛市',
            }, {
              value: '3',
              label: '淄博市',
            }, {
              value: '4',
              label: '枣庄市',
            }, {
              value: '5',
              label: '东营市',
            }, {
              value: '6',
              label: '烟台市',
            }, {
              value: '7',
              label: '潍坊市',
            }, {
              value: '8',
              label: '济宁市',
            }, {
              value: '9',
              label: '泰安市',
            }, {
              value: '10',
              label: '威海市',
            }, {
              value: '11',
              label: '日照市',
                },
                {
              value: '12',
              label: '莱芜市',
            }, {
              value: '13',
              label: '临沂市',
            }, {
              value: '14',
              label: '德州市',
            }, {
              value: '15',
              label: '聊城市',
            }, {
              value: '16',
              label: '滨州市',
            }, {
              value: '17',
              label: '菏泽市',
            }, 
            ]
                    },

                    
                    {
            value: '17',
            label: '河南省',
            children: [{
              value: '1',
              label: '郑州市',
            }, {
              value: '2',
              label: '开封市',
            }, {
              value: '3',
              label: '洛阳市',
            }, {
              value: '4',
              label: '平顶山市',
            }, {
              value: '5',
              label: '安阳市',
            }, {
              value: '6',
              label: '鹤壁市',
            }, {
              value: '7',
              label: '新乡市',
            }, {
              value: '8',
              label: '焦作市',
            }, {
              value: '9',
              label: '濮阳市',
            }, {
              value: '10',
              label: '许昌市',
            }, {
              value: '11',
              label: '漯河市',
                },
                {
              value: '12',
              label: '三门峡市',
            }, {
              value: '13',
              label: '南阳市',
            }, {
              value: '14',
              label: '商丘市',
            }, {
              value: '15',
              label: '信阳市',
            }, {
              value: '16',
              label: '周口市',
            }, {
              value: '17',
              label: '驻马店市',
                }, 
                {
              value: '18',
              label: '济源市',
            }, 
            ]
                    },

                    {
            value: '18',
            label: '湖北省',
            children: [{
              value: '1',
              label: '武汉市',
            }, {
              value: '2',
              label: '黄石市',
            }, {
              value: '3',
              label: '十堰市',
            }, {
              value: '4',
              label: '荆州市',
            }, {
              value: '5',
              label: '宜昌市',
            }, {
              value: '6',
              label: '襄樊市',
            }, {
              value: '7',
              label: '鄂州市',
            }, {
              value: '8',
              label: '荆门市',
            }, {
              value: '9',
              label: '孝感市',
            }, {
              value: '10',
              label: '黄冈市',
            }, {
              value: '11',
              label: '咸宁市',
                },
                {
              value: '12',
              label: '随州市',
            }, {
              value: '13',
              label: '仙桃市',
            }, {
              value: '14',
              label: '天门市',
            }, {
              value: '15',
              label: '潜江市',
            }, {
              value: '16',
              label: '神农架林区',
            }, {
              value: '17',
              label: '恩施土家族苗族自治州',
                }, 
            ]
                    },

                    {
            value: '19',
            label: '湖南省',
            children: [{
              value: '1',
              label: '长沙市',
            }, {
              value: '2',
              label: '株洲市',
            }, {
              value: '3',
              label: '湘潭市',
            }, {
              value: '4',
              label: '衡阳市',
            }, {
              value: '5',
              label: '邵阳市',
            }, {
              value: '6',
              label: '岳阳市',
            }, {
              value: '7',
              label: '常德市',
            }, {
              value: '8',
              label: '张家界市',
            }, {
              value: '9',
              label: '益阳市',
            }, {
              value: '10',
              label: '郴州市',
            }, {
              value: '11',
              label: '永州市',
                },
                {
              value: '12',
              label: '怀化市',
            }, {
              value: '13',
              label: '娄底市',
            }, {
              value: '14',
              label: '湘西土家族苗族自治州',
            },
            ]
                    },

                    {
            value: '20',
            label: '广东省',
            children: [{
              value: '1',
              label: '广州市',
            }, {
              value: '2',
              label: '深圳市',
            }, {
              value: '3',
              label: '珠海市',
            }, {
              value: '4',
              label: '汕头市',
            }, {
              value: '5',
              label: '韶关市',
            }, {
              value: '6',
              label: '佛山市',
            }, {
              value: '7',
              label: '江门市',
            }, {
              value: '8',
              label: '湛江市',
            }, {
              value: '9',
              label: '茂名市',
            }, {
              value: '10',
              label: '肇庆市',
            }, {
              value: '11',
              label: '惠州市',
                },
                {
              value: '12',
              label: '梅州市',
            }, {
              value: '13',
              label: '汕尾市',
            }, {
              value: '14',
              label: '河源市',
            }, {
              value: '15',
              label: '阳江市',
            }, {
              value: '16',
              label: '清远市',
            }, {
              value: '17',
              label: '东莞市',
            }, {
              value: '18',
              label: '中山市',
            }, {
              value: '19',
              label: '潮州市',
            }, {
              value: '20',
              label: '揭阳市',
            }, {
              value: '21',
              label: '云浮市',
            }, 
            ]
                    },

                    {
            value: '21',
            label: '甘肃省',
            children: [{
              value: '1',
              label: '兰州市',
            }, {
              value: '2',
              label: '金昌市',
            }, {
              value: '3',
              label: '白银市',
            }, {
              value: '4',
              label: '天水市',
            }, {
              value: '5',
              label: '嘉峪关市',
            }, {
              value: '6',
              label: '武威市',
            }, {
              value: '7',
              label: '张掖市',
            }, {
              value: '8',
              label: '平凉市',
            }, {
              value: '9',
              label: '酒泉市',
            }, {
              value: '10',
              label: '庆阳市',
            }, {
              value: '11',
              label: '定西市',
                },
                {
              value: '12',
              label: '陇南市',
            }, {
              value: '13',
              label: '临夏回族自治州',
            }, {
              value: '14',
              label: '甘南藏族自治州',
            },
            ]
                    },

                    
                    {
            value: '22',
            label: '四川省',
            children: [{
              value: '1',
              label: '成都市',
            }, {
              value: '2',
              label: '自贡市',
            }, {
              value: '3',
              label: '攀枝花市',
            }, {
              value: '4',
              label: '泸州市',
            }, {
              value: '5',
              label: '德阳市',
            }, {
              value: '6',
              label: '绵阳市',
            }, {
              value: '7',
              label: '广元市',
            }, {
              value: '8',
              label: '遂宁市',
            }, {
              value: '9',
              label: '内江市',
            }, {
              value: '10',
              label: '乐山市',
            }, {
              value: '11',
              label: '南充市',
                },
                {
              value: '12',
              label: '眉山市',
            }, {
              value: '13',
              label: '宜宾市',
            }, {
              value: '14',
              label: '广安市',
            }, {
              value: '15',
              label: '达州市',
            }, {
              value: '16',
              label: '雅安市',
            }, {
              value: '17',
              label: '巴中市',
            }, {
              value: '18',
              label: '资阳市',
            }, {
              value: '19',
              label: '阿坝藏族羌族自治州',
            }, {
              value: '20',
              label: '甘孜藏族自治州',
            }, {
              value: '21',
              label: '凉山彝族自治州',
            }, 
            ]
                    },


                    {
            value: '23',
            label: '贵州省',
            children: [{
              value: '1',
              label: '贵阳市',
            }, {
              value: '2',
              label: '六盘水市',
            }, {
              value: '3',
              label: '遵义市',
            }, {
              value: '4',
              label: '安顺市',
            }, {
              value: '5',
              label: '铜仁地区',
            }, {
              value: '6',
              label: '毕节地区',
            }, {
              value: '7',
              label: '黔西南布依族苗族自治州',
            }, {
              value: '8',
              label: '黔东南苗族侗族自治州',
            }, {
              value: '9',
              label: '黔南布依族苗族自治州',
            }, 
            ]
                    },


                    {
            value: '24',
            label: '海南省',
            children: [{
              value: '1',
              label: '海口市',
            }, {
              value: '2',
              label: '三亚市',
            }, {
              value: '3',
              label: '五指山市',
            }, {
              value: '4',
              label: '琼海市',
            }, {
              value: '5',
              label: '儋州市',
            }, {
              value: '6',
              label: '文昌市',
            }, {
              value: '7',
              label: '万宁市',
            }, {
              value: '8',
              label: '东方市',
            }, {
              value: '9',
              label: '澄迈县',
            }, {
              value: '10',
              label: '定安县',
            }, {
              value: '11',
              label: '屯昌县',
                },
                {
              value: '12',
              label: '临高县',
            }, {
              value: '13',
              label: '白沙黎族自治县',
            }, {
              value: '14',
              label: '昌江黎族自治县',
            }, {
              value: '15',
              label: '乐东黎族自治县',
            }, {
              value: '16',
              label: '陵水黎族自治县',
            }, {
              value: '17',
              label: '保亭黎族苗族自治县',
                }, 
                {
              value: '18',
              label: '琼中黎族苗族自治县',
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