<template>
    <div>
        <Header></Header>
        <van-dropdown-menu>
            <van-dropdown-item v-model="value1" :options="option1" />
            <van-dropdown-item v-model="value2" :options="option2" />
            <van-dropdown-item v-model="value3" :options="option3" />
        </van-dropdown-menu>
        <Tabbar></Tabbar>
    </div>
</template>

<script>
import Header from '@/components/Header'
import Tabbar from '@/components/Tabbar'
export default {
    name: "Cinema",
    components: {
        Header,
        Tabbar
    },
    data() {
        return {
            value1: 0,
            value2: 'a',
            value3: 'd',
            option1: [
                { text: '全城', value: 0 },
                { text: '全城', value: 1 },
                { text: '全城', value: 2 }
            ],
            option2: [
                { text: '品牌', value: 'a' },
                { text: '品牌', value: 'b' },
                { text: '品牌', value: 'c' }
            ],
            option3: [
                { text: '特色', value: 'd' },
                { text: '特色', value: 'e' },
                { text: '特色', value: 'f' }
            ]
        };
    }
}
</script>