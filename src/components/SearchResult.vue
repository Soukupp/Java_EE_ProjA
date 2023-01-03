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
            v-model="inputSearch"
            :placeholder="inputSearch"
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
            :disabled="this.inputSearch == ''"
            @click="searchExperts, searchTopics"
          ></el-button>
        </el-col>
      </el-row>
    </el-header>
    <!-- 页面主体区域 -->
    <el-container>
      <el-main style="height: 710px"
        ><el-card
          :body-style="{ padding: '0px' }"
          v-for="(item, index) in Experts"
          :key="index"
        >
          <div
            style="padding: 14px"
            :key="index"
            @click="linkToExpertDetail(item, index)"
          >
            <div>
              <span class="name">{{ Experts[index].realName }}&nbsp;&nbsp;</span>

              <span class="city"
                ><i class="el-icon-location"></i>{{ Experts[index].city }}</span
              >
              <br />
              <span class="title">{{ Experts[index].job }}</span>
            </div>
            <Test5 :fatherScore="Experts[index].rating" class="rating" />

            <div class="description">
              <br />
              <br />

              <div class="subdes">
                <span
                  class="topic"
                  v-for="(item, subIndex) in Experts[index].topic"
                  :key="subIndex"
                  ><i style="color: gray; font-size: 20px">#&nbsp;</i
                  >{{ Experts[index].topic[subIndex].title }}<br
                /></span>
              </div>
              <br />
              <div>
                <!-- <span class="type"
                  >&nbsp;&nbsp;{{ Experts[index].topic[0].type }}&nbsp;&nbsp;</span
                > -->
                <span class="price">{{ Experts[index].price }}元/小时</span>
              </div>
            </div>
          </div>
        </el-card>

        <el-card
          :body-style="{ padding: '0px' }"
          v-for="(item, index) in Topics"
          :key="index"
        >
          <div
            style="padding: 14px"
            :key="index"
            @click="linkToExpertDetail(item, index)"
          >
            <div>
              <span class="name"># {{ Topics[index].title }}</span
              ><br />
              <span class="name">{{ Topics[index].realName }}&nbsp;&nbsp;</span>

              <span class="city"
                ><i class="el-icon-location"></i>{{ Topics[index].city }}</span
              >
              <br />
              <span class="title">{{ Topics[index].job }}</span>
            </div>

            <div class="description">
              <div class="subdes">
                <span
                  class="topic"
                  v-for="(item, subIndex) in Topics[index].topic"
                  :key="subIndex"
                  ><i style="color: gray; font-size: 20px">#&nbsp;</i
                  >{{ Topics[index].topic[subIndex].title }}<br
                /></span>
              </div>
              <br />
              <div>
                <!-- <span class="type"
                  >&nbsp;&nbsp;{{ Topics[index].topic[0].type }}&nbsp;&nbsp;</span
                > -->
                <span class="price">{{ Topics[index].price }}元/小时</span>
              </div>
            </div>
          </div>
        </el-card>
      </el-main>
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
.city {
  color: gray;
}
.name {
  color: black;
  font-size: 20px;
}

.title {
  display: inline-block;
  margin-top: 8px;
  color: gray;
}
.topic {
  padding: 0px;
  margin-top: 60px;
  line-height: 28px;
}
.type {
  display: inline-block;
  margin: 8px;
  border-radius: 8px;
  font-size: 16px;
  background-color: lightblue;
  color: cadetblue;
  text-align: center;
  line-height: 24px;
}
.price {
  font-size: 20px;
  color: red;
  float: right;
}

.rating {
  margin-top: 8px;
  font-size: 24px;
  color: coral;
  float: left;
}
.subdes {
  margin-top: 8px;
  font-size: 16px;
  margin-bottom: 0px;
}
.el-card {
  border-radius: 2px;
  background-color: #fff;
  overflow: hidden;
  transition: 0.3s;
  margin-bottom: 30px;
  height: auto;
}
</style>

<script>
import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
import AllExpert from "./AllExpert.vue";
import Footer from "./Footer.vue";
import Header from "./Header.vue";
import Topic1 from "./Topic1.vue";
import userInfo from "./userInfo.vue";
import Test5 from "./Test5.vue";
Vue.use(Vuex);

export default {
  data() {
    return {
      inputSearch: "",
      input: "",
      isCollapse: false,
      num: "first",
      Experts: [],
      Topics: [],
      length: Number,
    };
  },
  components: {
    userInfo,
    Topic1,
    AllExpert,
    Footer,
    Header,
    Test5,
  },
  mounted() {
    this.inputSearch = this.$route.params.input;
    console.log("子页面传参测试：" + this.inputSearch);
    this.searchExperts().then((res) => {
      this.Experts = res.data.data;
      console.log("experts长度是" + this.Experts.length);
      this.getTopics(this.Experts.length);
      this.getCity(this.Experts.length);
    });
    this.searchTopics().then((res) => {
      this.Topics = res.data.data;
      console.log("topics长度是" + this.Topics.length);
      this.getTpExpert(this.Topics.length);
      this.getTpTopics(this.Topics.length);
      this.getTpCity(this.Topics.length);
    });
  },
  methods: {
    logout() {
      window.sessionStorage.clear();
      this.$router.push("/login");
    },
    userInfoShow() {
      this.$router.push("/userInfo");
    },
    async searchExperts() {
      console.log("子页面搜索：" + this.inputSearch);
      var expertData = new FormData();
      expertData.append("content", this.inputSearch);
      var config = {
        method: "post",
        url: "http://localhost:8080/expert/search",
        data: expertData,
      };
      var res = await axios(config);
      console.log("Experts:", res.data);
      this.Experts = res.data.data;
      console.log(this.Experts);
      return res;
    },
    async searchTopics() {
      var topicData = new FormData();
      topicData.append("content", this.inputSearch);
      var config = {
        method: "post",
        url: "http://localhost:8080/topic/search",
        data: topicData,
      };
      var res = await axios(config);
      console.log("Topics:", res.data);
      this.Topics = res.data.data;
      console.log(this.Topics);
      return res;
    },

    linkToExpertDetail(item, index) {
      var id = this.getExpert(item, index);
      console.log("跳转到" + id + "对应的行家信息详情");
      this.$router.push(`/ExpertDetailInfo/${id}`);
    },
    async getTopics(length) {
      for (var i = 0; i < length; i++) {
        var data = new FormData();
        data.append("expertId", this.Experts[i].phone);
        var config = {
          method: "post",
          url: "http://localhost:8080/topic/getById",
          data: data,
        };
        var that = this;
        await axios(config)
          .then(function (response) {
            that.$set(that.Experts[i], "topic", response.data.data.topics);
            that.$set(that.Experts[i], "price", response.data.data.minPrice[0]);
            that.$set(that.Experts[i], "type", response.data.data.topics[0].type);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
    async getCity(length) {
      for (var i = 0; i < length; i++) {
        var data = new FormData();
        data.append("userId", this.Experts[i].phone);
        var config = {
          method: "post",
          url: "http://localhost:8080/user/myInfo",
          data: data,
        };
        var that = this;
        await axios(config)
          .then(function (response) {
            console.log(response.data.data.city);
            that.$set(that.Experts[i], "province", response.data.data.province);
            that.$set(that.Experts[i], "city", response.data.data.city);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
    async getTpExpert(length) {
      for (var i = 0; i < length; i++) {
        console.log(this.Topics[i].expertId);
        var data = new FormData();
        data.append("userId", this.Topics[i].expertId);
        var config = {
          method: "post",
          url: "http://localhost:8080/expert/getOne",
          data: data,
        };
        var that = this;
        await axios(config)
          .then(function (response) {
            console.log("TpExpert:");
            console.log(response.data.data);
            that.$set(that.Topics[i], "realName", response.data.data.realName);
            that.$set(that.Topics[i], "job", response.data.data.job);
            that.$set(that.Topics[i], "rating", response.data.data.rating);
          })
          .catch(function (error) {
            console.log(error);
          });
        console.log(this.Topics[0].rating);
      }
    },
    async getTpTopics(length) {
      for (var i = 0; i < length; i++) {
        var data = new FormData();
        data.append("expertId", this.Topics[i].expertId);
        var config = {
          method: "post",
          url: "http://localhost:8080/topic/getById",
          data: data,
        };
        var that = this;
        await axios(config)
          .then(function (response) {
            that.$set(that.Topics[i], "topic", response.data.data.topics);
            that.$set(that.Topics[i], "price", response.data.data.minPrice[0]);
            that.$set(that.Topics[i], "type", response.data.data.topics[0].type);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
    async getTpCity(length) {
      for (var i = 0; i < length; i++) {
        var data = new FormData();
        data.append("userId", this.Topics[i].expertId);
        var config = {
          method: "post",
          url: "http://localhost:8080/user/myInfo",
          data: data,
        };
        var that = this;
        await axios(config)
          .then(function (response) {
            console.log(response.data.data.city);
            that.$set(that.Topics[i], "province", response.data.data.province);
            that.$set(that.Topics[i], "city", response.data.data.city);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
  },
};
</script>
