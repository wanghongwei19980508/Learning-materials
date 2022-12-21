<template>
    <div>
        <FilmHeader/>
        <router-view></router-view>
    </div>
</template>

<script>
// 导入头组件
import FilmHeader from '@/components/Navigation/FilmHeader'
export default {
    components: {
        FilmHeader
    }
}
</script>