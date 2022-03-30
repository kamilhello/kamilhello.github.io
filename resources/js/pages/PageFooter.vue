<template>
    <div class="footer">
        <span>&#169; 2022 Kamil Rutkowski<br>Powered by <a href="https://laravel.com" target="_blank">Laravel</a> and <a href="https://vuejs.org" taget="_blank">VueJS</a></span>
    </div>
</template>
<script>
export default{
    name: 'PageFooter',
}
</script>
<style lang="scss" scoped>
@import '../../scss/variables/colors';
@import '../../scss/variables/variables';
.footer{
    height: $height;
    lein-height: 20px;
    padding: 40px;
    border-top: solid 1px $color5;
    color: $whiteColor;
    text-align: center;
    font-size: 14px;
}
a{
    color: $bkFooter;
    text-decoration: none;
}
</style>