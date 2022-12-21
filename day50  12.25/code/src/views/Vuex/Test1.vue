<template>
    <div>
        测试vuex1组件 班级：{{ classname }}，教室：{{ classroom }}
        <button @click="chn">点我修改班级名称</button>
        {{getClassName}}
        {{getClassRoom}}
    </div>
</template>

<script>
import { mapMutations } from "vuex";
import { mapActions } from "vuex";
import { mapState } from "vuex";
import { mapGetters } from "vuex";

export default {
    created() {
        // 尝试去获取classname值
        //console.log(this.$store.state.classname);
    },
    computed: {
        ...mapState(["classname", "classroom"]),
        ...mapGetters(["getClassName","getClassRoom"])
    },
    mounted() {
        //console.log(this.classname);
        //console.log(this.classroom);
        // 单个获取某个getters
        console.log(this.$store.getters.getClassName);
    },
    methods: {
        ...mapMutations(["editClassName", "editClassRoom"]),
        chn() {
            let newname = "BK-2003";
            // 提交新的数据
            // this.$store.commit("editClassName", newname);
            this.editClassName(newname);
            this.editClassRoom("3F-29");
        },
    },
};
</script>
