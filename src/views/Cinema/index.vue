<template>
    <div>
        <div class="header">
            <Header></Header>
            <van-dropdown-menu>
                <van-dropdown-item v-model="value1" :options="option1" />
                <van-dropdown-item v-model="value2" :options="option2" />
                <van-dropdown-item v-model="value3" :options="option3" />
            </van-dropdown-menu>
        </div>
        <section>
            <div v-for="item in cityList" :key="item.cinemaId" class="city">
                <div class="message">
                    <p>{{ item.name }}</p>
                    <p>{{ item.address }}</p>
                </div>
                <div class="price">
                    <p><span>￥</span>{{ item.lowPrice / 100 }}<span>起</span></p>
                </div>
            </div>
        </section>
        <Tabbar></Tabbar>
    </div>
</template>

<script>
import Header from '@/components/Header'
import Tabbar from '@/components/Tabbar'
import http from '@/util/http'
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
            cityList: [],
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
    },
    mounted() {
        http({
            url: '/gateway?cityId=110100&ticketFlag=1&k=9657603',
            headers: {
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then(res => {
            console.log(res.data.data.cinemas)
            this.cityList = res.data.data.cinemas
        })
    }
}
</script>

<style lang="scss" scoped>
.header {
    position: sticky;
    top: 0
}

section {
    padding-bottom: 3rem;
    box-sizing: border-box;

    .city {
        display: flex;
        box-sizing: border-box;
        padding: 1rem;
        justify-content: space-between;
        align-items: center;

        .message {
            width: 70%;

            p {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            ;

            p:last-child {
                font-size: .8rem;
                color: #797d82;
            }
        }

        .price {
            color: orange;

            span {
                font-size: .625rem;
            }
        }

    }
}
</style>