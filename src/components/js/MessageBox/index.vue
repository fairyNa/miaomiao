<template>
    <div class="message">
        <h2>{{title}}</h2>
        <p>{{content}}</p>
        <div>
            <div @touchstart="handleCancel">{{cancel}}</div>
            <div @touchstart="handleOk">{{ok}}</div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.message{width: 180px;height: 100px;background: white; border: 1px solid #ccc; border-radius: 4px; box-shadow: 4px,4px,4px,4px #ccc; position: absolute; top: 40%; left: 25%;margin: -60px 0,0,-100px;}
.message h2{text-align: center;line-height: 30px; font-size: 14px;}
.message p{text-align: center;line-height: 30px; font-size: 14px;}
.message>div{display: flex; position: absolute;bottom: 0px;width: 100%; font-size: 14px;}
.message>div div{flex: 1;text-align: center; border-right: 1px solid #ccc; line-height: 20px;}
.message>div div:last-child{border-right: none;}
</style>