<template>
    <header>
        <div>{{ title }}</div>
    </header>
</template>

<script>
export default {
    name: 'Header',
    props: {
        title: {
            type: String,
            default: '喵喵电影'
        }
    }
}
</script>

<style scoped lang="scss">
header {
    div {
        width: 100%;
        height: 2.625rem;
        background: red;
        text-align: center;
        color: white;
        line-height: 2.625rem;
    }
}
</style>