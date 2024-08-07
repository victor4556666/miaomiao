<template>
    <div>
        <div class="box">
            <ul v-for="item in filmslist" :key="item.filmId">
                <li><img :src="item.poster" alt=""></li>
                <li style="width:100%;" class="movie">
                    <div>{{ item.name }} <span>{{ item.item.name }}</span>
                    </div>

                    <div class="actor">主演：{{ item.actors | actorsList }}</div>
                    <div>{{ item.nation }} | {{ item.runtime }}分钟</div>
                </li>
                <li>
                    <div>购票</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import http from '@/util/http'

export default {
    name: "ComingSoon",
    data() {
        return {
            filmslist: []
        }
    },
    mounted() {
        http({
            url: '/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=4129704',
            headers: {
                'X-Host': 'mall.film-ticket.film.list'
            }
        }).then(res => {
            console.log(res.data.data.films)
            this.filmslist = res.data.data.films
        })
    }
}
</script>

<style scoped lang="scss">
.box {
    padding-bottom: 2.7rem;
    box-sizing: border-box;

    ul {
        display: grid;
        grid-template-columns: 24% 62% 15%;
        box-sizing: border-box;
        padding: .625rem;
        font-size: 0.8rem;
        place-content: center;
        place-items: center;
        padding-left: .1rem;


        img {
            width: 4.125rem;

        }

        li {
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
                height: 0.8rem;
                background: #d2d6dc;
                color: white;
                font-size: .75rem;
            }
        }



        li:last-child {
            div {
                width: 3.125rem;
                height: 1.5625rem;
                border: 1px solid orange;
                border-radius: 6px;
                text-align: center;
                line-height: 1.5625rem;
                color: orange;
                font-size: 0.8rem;
            }
        }

        .actor {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }


    }
}
</style>