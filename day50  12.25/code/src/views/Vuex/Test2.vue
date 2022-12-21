<template>
    <div>
        测试vuex2组件
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    created() {
        // 尝试去获取classname值
        console.log(this.$store.state.classname);
        // 以下这种修改数据源的方式不可取（不能用）
        // this.$store.state.classname = "bkkkkkkkkkkkkkkk";
    },
    computed: {
        ...mapState(["classname","classroom"]),
    },
    mounted() {
        console.log(this.classname);
        console.log(this.classroom);
    },
};
</script>
