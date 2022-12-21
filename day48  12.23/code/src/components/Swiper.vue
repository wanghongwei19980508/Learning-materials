<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <!-- 插槽 -->
            <slot></slot>
        </div>
    </div>
</template>

<script>
// 导入swiper
import Swiper from "swiper";
import "swiper/swiper-bundle.min.css";
export default {
    mounted() {
        new Swiper(".swiper-container", {
            slidesPerView: 4,
            spaceBetween: 30,
        });
    },
};
</script>
