<template>
    <footer>
        <ul>
            <router-link to="/movie" custom v-slot="{ navigate, isActive }">
                <li @click="navigate" :class="isActive ? 'wuactive' : ''">
                    <i class="iconfont icon-dianying"></i>
                    <div>电影</div>
                </li>
            </router-link>
            <router-link to="/cinema" custom v-slot="{ navigate, isActive }">
                <li @click="navigate" :class="isActive ? 'wuactive' : ''">
                    <i class="iconfont icon-yingyuan"></i>
                    <div>影院</div>
                </li>
            </router-link>
            <router-link to="/mine" custom v-slot="{ navigate, isActive }">
                <li @click="navigate" :class="isActive ? 'wuactive' : ''">
                    <i class="iconfont icon-weibiaoti2fuzhi12"></i>
                    <div>我的</div>
                </li>
            </router-link>
        </ul>
    </footer>
</template>

<script>
import '@/assets/iconfont/iconfont.css'
export default {
    name: 'Tabbar'
}
</script>

<style scoped lang="scss">
footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background: white;
    border-top: 1px solid gray;

    ul {
        display: flex;
        height: 2.625rem;

        .wuactive {
            color: red;
        }

        li {
            flex: 1;
            display: flex;
            flex-direction: column;
            text-align: center;
            justify-content: space-around;

            i {
                font-size: 1rem;

            }

            div {
                font-size: 0.8rem;
            }
        }
    }
}
</style>