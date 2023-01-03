<template>
  <div>
    <Header />
    <el-container style="height:710px;">
      <el-main>
      <el-card>
      <el-descriptions class="margin-top" title="个人信息" :column="1" border>
        <template slot="extra">
          <el-button @click="edit()"  size="small">编辑</el-button>
        </template>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-user"></i>
            手机号
          </template>
          {{ phone }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-s-custom"></i>
            姓名
          </template>
          {{ name }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-location-outline"></i>
            地区
          </template>
          {{ address }}
        </el-descriptions-item>

        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-basketball"></i>
            学校
          </template>
          {{ school }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-date"></i>
            是否为行家
          </template>
          {{isExpert}}
        </el-descriptions-item>
      </el-descriptions>
    </el-card>
    </el-main>
  </el-container>
    <userInfoEdit  ref="userInfoEdit"></userInfoEdit>
    <el-container>
      <Footer />
    </el-container>
  </div>
</template>

<script>
//个人信息的编辑，涉及到省份和城市接口的调用，先选省份，选好后得到pid再传给city接口才能得到city信息。
import axios from 'axios';
import Footer from './Footer.vue';
import Header from './Header.vue';
import userInfoEdit from './userInfoEdit.vue';
export default {
  name: "Info",
  components: {
    userInfoEdit,
    Header,
      Footer
  },
  data() {
    return {
        phone: String,
        name: String,
        address: String,
        school: String,
        age: Number,
        gender: String,
        occupation: String,
        isExpert:Boolean,
    };
  },
  mounted() {
      axios.get("https://www.fastmock.site/mock/71543001dffe01cc081fac899d496fa0/user/userinfo").then(res => {
          this.userInfo = res.data;
          this.phone = res.data.phone;
          this.school = res.data.school;
          this.name = res.data.name;
          this.address = res.data.address;
          this.age = res.data.age;
          this.gender = res.data.gender;
          this.occupation = res.data.occupation;
          if (res.data.isExpert)
              this.isExpert = "是";
          else this.isExpert = "否";
          console.log(this.userInfo);
      })
      this.userId = localStorage.getItem('userId');
      console.log("Home页面的userId是"+this.userId);
  },
  methods: {
      edit() {
          console.log("这是edit函数");
          this.$refs.userInfoEdit.init();
      }
  },
};
</script>

<style scoped lang="less">
.img {
  width: 80px;
  height: 80px;
}

/deep/.el-card {
    border-radius: 4px;
    border: 1px solid #EBEEF5;
    background-color: #FFF;
    overflow: hidden;
    color: #303133;
    transition: .3s;
    width: 100%; 
}

</style>




