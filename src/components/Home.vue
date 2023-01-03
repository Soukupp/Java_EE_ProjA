<template>
  <el-container element.style="height: 100px" class="home-container">
    <el-header>
      <div>
        <img src="../img/logo.png" alt="" height="40px" />
        <span>对询</span>
      </div>
      <el-row>
        <el-col
          :span="5"
          style="float: left; width: 160px; text-align: center; height: 20px"
        >
          <el-input
            type="text"
            v-model="input"
            placeholder="搜索行家/话题"
            style="width: 160px; height: 20px; cursor: pointer"
            clearable
          ></el-input>
        </el-col>
        <el-col
          :span="5"
          style="float: left; width: 25px; text-align: center; height: 20px"
        >
          <el-button
            icon="el-icon-search"
            type="primary"
            circle
            :disabled="this.input == ''"
            @click="search"
          ></el-button>
        </el-col>
      </el-row>
    </el-header>
    <!-- 页面主体区域 -->
    <el-container>
      <el-main style="height: 710px"><AllExpert /></el-main>
    </el-container>
    <Footer :num="num"></Footer>
  </el-container>
</template>

<style lang="less" scoped>
.el-card__body,
.el-main {
  padding: 0px;
}

.el-header {
  background-color: darkslategrey;
  display: flex;
  justify-content: space-between;
  padding-left: 12px;
  align-items: center;
  color: #fff;
  font-size: 24px;
  > div {
    //内嵌的div样式
    display: flex;
    align-items: center;
    span {
      margin-left: 25px;
    }
  }
}
.element.style {
  height: 100px;
}
.toggle-button {
  background-color: #4a5064; //背景色(浅灰)
  font-size: 10px; //字体大小10像素
  line-height: 24px; //行高24像素
  color: #fff; //字体颜色白色
  text-align: center; //字体居中
  letter-spacing: 0.2em; //字体之间的距离
  cursor: pointer; //鼠标的形状（手形）
}
.submenu {
  display: inline-flex;
  text-align: left;
  margin-left: 15px;
}

.el-aside {
  background-color: #333744;
}
.el-main {
  background-color: #eaedf1;
}

.home-container {
  height: 100vh;
}
</style>

<script>
import AllExpert from "./AllExpert.vue";
import Footer from "./Footer.vue";
import Header from "./Header.vue";
import Topic1 from "./Topic1.vue";
import userInfo from "./userInfo.vue";
export default {
  data() {
    return {
      input: "",
      isCollapse: false,
      num: "first",
    };
  },
  components: {
    userInfo,
    Topic1,
    AllExpert,
    Footer,
    Header,
  },
  methods: {
    logout() {
      window.sessionStorage.clear();
      this.$router.push("/login");
    },
    userInfoShow() {
      this.$router.push("/userInfo");
    },
    search() {
      console.log("Home输入内容：" + this.input);
      this.$router.push(`/searchresult/${this.input}`);
    },
  },
};
</script>
