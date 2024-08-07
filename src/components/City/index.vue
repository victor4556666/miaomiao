<template>
    <div>
        <div style="margin: .5rem; margin-left: 1rem;">热门城市</div>
        <div class="hot">
            <div>北京</div>
            <div>上海</div>
            <div>广州</div>
            <div>深圳</div>
        </div>
        <van-index-bar :index-list="indexList">
            <div v-for="item in cityList" :key="item.type">
                <van-index-anchor :index="item.type" />
                <van-cell v-for="data in item.city" :key="data.cityId" :title="data.name" />
            </div>

        </van-index-bar>
    </div>
</template>

<script>
import http from '@/util/http'

export default {
    name: "City",

    data() {
        return {
            cityList: [],
            indexList: []
        }
    },
    mounted() {
        http({
            url: '/gateway?k=9404989',
            headers: {
                'X-Host': 'mall.film-ticket.city.list'
            }
        }).then(res => {
            console.log(res.data.data.cities)
            this.cityList = this.renderCityList(res.data.data.cities)
            console.log(this.cityList)
        })
    },
    methods: {
        renderCityList(list) {
            var letterList = []
            var cityList = []
            var numberList = []
            for (let i = 65; i < 91; i++) {
                letterList.push(String.fromCharCode(i))
            }
            for (let i = 0; i < letterList.length; i++) {
                numberList = list.filter(item => item.pinyin.substring(0, 1).toUpperCase() === letterList[i])
                if (numberList.length) {
                    cityList.push({
                        type: letterList[i],
                        city: numberList
                    })
                }

            }
            this.indexList = cityList.map(item => item.type)
            return cityList
        }
    }

}
</script>

<style scoped lang="scss">
.hot {
    display: grid;
    grid-template-columns: repeat(3, 31.5%);
    text-align: center;
    gap: .625rem;
    margin: .625rem;
    box-sizing: border-box;


    div {
        background: #f4f4f4;
    }

}
</style>