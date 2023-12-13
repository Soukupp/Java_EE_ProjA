<template>
    <div class="icons" >
        <link rel="stylesheet icon" href="//at.alicdn.com/t/c/font_3828548_qlyozufzbpd.css">

    <el-tabs v-model="activeName"  type="card"  :stretch="true">
    <el-tab-pane label="行家" name="first" ><span @click="linkToAllExpert()" slot="label"><i class="iconfont icon-icon-test4"></i>&nbsp;行家</span></el-tab-pane>
    <el-tab-pane label="消息" name="second"><span  @click="linkToOrders()" slot="label"><i class="iconfont icon-icon-test1"></i>&nbsp;订单</span></el-tab-pane>
    <el-tab-pane label="订单" name="third"><span @click="linkToMessages()" slot="label"><i class="iconfont icon-icon-test"></i>&nbsp;消息</span></el-tab-pane>
    <el-tab-pane label="我的" name="fourth"><span @click="linkToUser()" slot="label"><i class="iconfont icon-icon-test3"></i>&nbsp;我的</span></el-tab-pane>
    </el-tabs>
    </div>
</template>

<style scoped lang="less">

.icons{
    background-color:darkslategray;
    border:1px;
    padding:8px;
    border-radius:2px;
    justify-content: center;
    color:white;
}
/deep/.el-tabs__item.is-active {
    color:lightseagreen; 
}
/deep/.el-tabs__item:hover {
    color:lightseagreen; 
    cursor: pointer;
}

/deep/.el-tabs__item {
    padding: 0 20px;
    height: 40px;
    box-sizing: border-box;
    line-height: 40px;
    display: inline-block;
    list-style: none;
    font-size: 14px;
    font-weight: 500;
    color: white;
    position: relative;
}


.com{
    display:inline-block;
}
</style>

<script>
export default {
    props:{
        "num": { type: String, default: "first" },
        "test": {type: Number, default: 2}
        },
    data() {
        return {
            activeName: 'first'
        };
    },
    methods: {
        linkToAllExpert() {
            console.log("跳转到行家页面去");
            this.$router.push({
                path: '/Home'
            })
            this.activeName = this.num;
        },
        linkToMessages() {
            console.log("跳转到消息页面去");
            this.$router.push({
            path: '/Messages'
            })
            this.activeName = this.num;
        },
        linkToUser() {
            console.log("跳转到个人页面去");
            this.$router.push({
            path: '/Me'
            })
            this.activeName = this.num;
        },
        linkToOrders() {
            console.log("跳转到订单页面去");
            this.$router.push({
            path: '/Orders'
            })
            this.activeName = this.num;
        },
        handleClick(tab, event) {
        console.log(tab, event);
      },
    },
    mounted() {
        this.activeName = this.num;
            }
}
</script>