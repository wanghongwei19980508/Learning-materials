<template>
    <div>
        <div class="logo">
            <img src="https://2url.cc/1OwrB" />
        </div>
        <div>
            <van-form @submit="onSubmit">
                <van-field
                    v-model="mobile"
                    name="mobile"
                    label="手机号"
                    placeholder="手机号"
                    :rules="[{ pattern, message: '请填写正确的手机号' }]"
                />
                <van-field
                    v-model="password"
                    type="password"
                    name="password"
                    label="密码"
                    placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]"
                />
                <div style="margin: 16px;">
                    <van-button square block type="info" native-type="submit"
                        >提交</van-button
                    >
                </div>
            </van-form>
        </div>
    </div>
</template>

<script>
import Vue from "vue";
import { Form, Field, Button, Toast } from "vant";

Vue.use(Form);
Vue.use(Field);
Vue.use(Button);
Vue.use(Toast);
export default {
    data() {
        return {
            mobile: "",
            password: "",
            pattern: /^1[3-9]\d{9}$/,
        };
    },
    methods: {
        onSubmit(values) {
            // values就是表单的数据
            // ajax
            this.$http.post("/v1/login", values).then((ret) => {
                if (ret.code == 0) {
                    Toast.success(ret.msg);
                    // 存储jwt
                    this.$store.commit("setJwt", ret.jwt);
                    setTimeout(() => {
                        // 判断是否是指定登录成功返回的页面
                        if (this.$route.query.toUrl) {
                            // 使用指定的地址
                            this.$router.push(this.$route.query.toUrl);
                        } else {
                            // 使用默认地址
                            this.$router.push("/center");
                        }
                    }, 2000);
                } else {
                    Toast.fail(ret.msg);
                }
            });
            // console.log("submit", values);
        },
    },
    created() {
        this.$store.commit("isShowFooterNav", false);
    },

    beforeDestroy() {
        this.$store.commit("isShowFooterNav", true);
    },
};
</script>

<style lang="scss" scoped>
.logo {
    margin-top: 150px;
    margin-bottom: 100px;
    text-align: center;
}
</style>
