<template>
  <div>
    这是个人页面
    <button @click="await1">待付款</button>
    <button @click="going1">学习中</button>
    <button @click="success1">已结束</button>
    <button @click="all1">全部</button>
    <button @click="student1">学员管理</button>
    <button @click="coupon1">优惠券</button>
    <button @click="consult1">立即咨询</button>
    <button @click="about1">关于我们</button>
  </div>
</template>
<script>
export default {
  methods: {
    await1() {
      this.$router.push("/center/await");
    },
    going1() {
      this.$router.push("/center/going");
    },
    success1() {
      this.$router.push("/center/success");
    },
    all1() {
      this.$router.push("/center/all");
    },
    student1() {
      this.$router.push("/center/student");
    },
    coupon1() {
      this.$router.push("/center/coupon");
    },
    consult1() {
      this.$router.push("/center/consult");
    },
    about1() {
      this.$router.push("/center/about");
    },
  },
};
</script>