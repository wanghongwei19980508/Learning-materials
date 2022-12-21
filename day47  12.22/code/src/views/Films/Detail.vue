<template>
    <div>
        电影详情页面
    </div>
</template>

<script>
export default {
    created() {
        // 通知app.vue隐藏底部导航（发送数据）
        // this.$eventBus.$emit("hide_footer", false);
        this.$store.commit("isShowFooterNav", false);
    },
    beforeDestroy() {
        // 通知app.vue显示底部导航（发送数据）
        // this.$eventBus.$emit("hide_footer", true);
        this.$store.commit("isShowFooterNav", true);
    },
};
</script>
