<template>
  <el-header>
    <div>
      <img src="../../img/logo.png" alt="" height="40px" />
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
</template>

<script>
export default {
  data() {
    return {
      input: "",
    };
  },
  methods: {
    logout() {
      window.sessionStorage.clear();
      this.$router.push("/login");
    },
    search() {
      console.log("Home输入内容：" + this.input);
      this.$router.push(`/searchresult/${this.input}`);
    },
  },
};
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
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
.el-aside {
  background-color: #333744;
}
.el-main {
  background-color: #eaedf1;
}
</style>
