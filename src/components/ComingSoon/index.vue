<template>
    <div class="box">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" :immediate-check="false">
            <van-cell v-for="item in filmslist" :key="item.filmId">
                <div><img :src="item.poster" alt=""></div>
                <div style="width:100%;" class="movie">
                    <div>{{ item.name }} <span>{{ item.item.name }}</span>
                    </div>
                    <div class="actor">主演：{{ item.actors | actorsList }}</div>
                    <div>{{ item.nation }} | {{ item.runtime }}分钟</div>
                </div>
                <div>
                    <div class="shop">购票</div>
                </div>
            </van-cell>
        </van-list>
    </div>
</template>

<script>
import http from '@/util/http'

// import BScroll from 'better-scroll'

export default {
    name: "NowPlaying",
    data() {
        return {
            filmslist: [],
            loading: false,
            finished: false,
            count: 1,
            total: 0
        }
    },
    mounted() {
        http({
            url: `/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=7615801`,
            headers: {
                'X-Host': 'mall.film-ticket.film.list'
            }
        }).then(res => {
            this.total = res.data.data.total
            this.filmslist = res.data.data.films
            this.loading = false
        })
    },
    methods: {
        onLoad() {
            // 异步更新数据
            if (this.total === this.filmslist.length && this.total > 0) {
                this.loading = true
                this.finished = true
                return
            }

            if (!this.finished) {
                this.count++
                console.log(1111)
                http({
                    url: `/gateway?cityId=110100&pageNum=${this.count}&pageSize=10&type=2&k=7615801`,
                    headers: {
                        'X-Host': 'mall.film-ticket.film.list'
                    }
                }).then(res => {
                    if (res.data.data.films.length === 0) {
                        this.finished = true
                        return
                    }
                    this.filmslist = [...this.filmslist, ...res.data.data.films]
                    this.loading = false
                })
            }


        }
    }
}
</script>

<style scoped lang="scss">
.box {
    padding-bottom: 2.7rem;
    box-sizing: border-box;


    .van-cell {
        padding: 0.3rem 0.3rem;
    }

    .van-cell__value {
        display: grid;
        grid-template-columns: 24% 58% 18%;
        box-sizing: border-box;
        // padding: .625rem;
        font-size: 0.8rem;
        place-content: center;
        place-items: center;
        // padding-left: .1rem;


        img {
            width: 4.125rem;

        }

        div {
            color: gray;

        }

        .movie div {
            margin-bottom: 0.25rem;
        }

        .movie div:first-child {
            font-size: 1rem;

            color: black;

            span {
                display: inline-block;
                width: 1.1rem;
                height: 1rem;
                line-height: 1rem;
                background: #d2d6dc;
                color: white;
                font-size: .75rem;
            }
        }

        .movie .hidden {
            visibility: hidden;
        }


        .shop {
            width: 3rem;
            height: 1.5625rem;
            border: 1px solid orange;
            border-radius: 6px;
            text-align: center;
            line-height: 1.5625rem;
            color: orange;
            font-size: 0.8rem;
        }


        .actor {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }


    }
}
</style>