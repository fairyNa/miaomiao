<template>
    <div id="main">
       <Header title="我的喵喵"></Header>
       <login></login>
       <tabBar></tabBar>
    </div>
</template>
<script>
import Header from '@/components/Header'
import tabBar from '@/components/tabBar'
import login from '@/components/login'
export default {
    name: 'mine',
        components:{
        Header,
        tabBar,
        login
    }
}
</script>
<style>

</style>