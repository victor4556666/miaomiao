<template>
    <div>
        <Header></Header>
        <ul>
            <router-link to="/movie/city" custom v-slot="{ navigate, isActive }">
                <li @click="navigate" :class="isActive ? 'red' : ''">
                    <span>
                        <span>大连</span>
                        <van-icon name="arrow-down" />
                    </span>
                </li>
            </router-link>
            <router-link to="/movie/nowplaying" custom v-slot="{ navigate, isActive }">
                <li @click="navigate" :class="isActive ? 'red' : ''">
                    <span>正在热映</span>
                </li>
            </router-link>
            <router-link to="/movie/comingsoon" custom v-slot="{ navigate, isActive }">
                <li @click="navigate" :class="isActive ? 'red' : ''">
                    <span>即将上映</span>
                </li>
            </router-link>
            <router-link to="/movie/search" custom v-slot="{ navigate, isActive }">
                <li @click="navigate" :class="isActive ? 'red' : ''">
                    <span><van-icon name="search" size=20 /></span>
                </li>
            </router-link>
        </ul>
        <Tabbar></Tabbar>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
import Header from '@/components/Header'
import Tabbar from '@/components/Tabbar'

export default {
    name: "Movie",
    components: {
        Header,
        Tabbar
    }
}
</script>

<style scoped lang="scss">
.red {
    color: red;

    span {
        border-bottom: 2px solid red;
        padding-bottom: 10px;
        padding-left: 2px;
        padding-right: 2px;
    }
}

div {
    ul {
        display: flex;
        height: 2.625rem;

        li {
            flex: 1;
            line-height: 2.625rem;
            text-align: center;

        }
    }
}
</style>