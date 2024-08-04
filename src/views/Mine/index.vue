<template>
    <div>
        <Header></Header>
        <div><input type="text" placeholder="用户名/手机号/Email"></div>
        <div><input type="password" placeholder="请输入您的密码"></div>
        <p><van-button type="danger" block>登录</van-button></p>
        <div class="box">
            <span>立即注册</span>
            <span>找回密码</span>
        </div>

        <Tabbar></Tabbar>
    </div>
</template>

<script>
import Header from '@/components/Header'
import Tabbar from '@/components/Tabbar'
export default {
    name: "Mine",
    components: {
        Header,
        Tabbar
    }
}
</script>
<style scoped lang="scss">
input {
    width: 99%;
    height: 3rem;
}


p {
    margin: 0.7rem;
    font-size: 1.25rem;
}

.box {
    overflow: hidden;
    color: red;
    font-size: .95rem;

    span:first-child {
        float: left;
        margin-left: 0.625rem;
    }

    span:last-child {
        float: right;
        margin-right: 0.625rem;
    }
}
</style>