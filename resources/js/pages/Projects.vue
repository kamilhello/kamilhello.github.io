<template>
    <h3 class="title">Projects</h3>
    <div class="row">
        <div class="col-xs-12 col-lg-3"></div>
        <div class="col-xs-12 col-lg-6">
    <figure>
        <img class="picture" src="images/confectionery.gif" alt="confectionery"/>
        <figcaption>Fig1. - Confectionery app</figcaption>
    </figure>
    </div>
        <div class="col-xs-12 col-lg-3"></div>
    </div>
    <div class="row">
        <div class="col-xs-12 pad10">
        <p><b>Confectionery</b> is app which support suppliers during taking orders for baker. 
        It allow to collect client's orders and generate delivery documents.</p>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-12 col-lg-3"></div>
        <div class="col-xs-12 col-lg-6">
        <figure>
            <img class="picture" src="images/deliveryPaper.jpg" alt="Delivery paper"/>
        </figure>
            <figcaption>Fig2. - Document generated via confectionery app.</figcaption>
        </div>
        <div class="col-xs-12 col-lg-3"></div>
    </div>
    <div class="row">
        <div class="col-xs-12 col-lg-3"></div>
        <div class="col-xs-12 col-lg-6 pad10">
            <h4>Technologies</h4>
            <p>App was built in Laravel 8 and Vue 3 frameworks.</p>
            <p>In project was used laravel's official packages:</p>
            <ul>
                <li>Sanctum</li>
                <li>Fortify</li>
            </ul>
            <p>Other technologies:</p>
            <ul>
                <li>Axios</li>
                <li>Dompdf</li>
                <li>Vue Router</li>
            </ul>
        </div>
        <div class="col-xs-12 col-lg-3"></div>
    </div>
    <div class="row">
        <div class="col-xs-12 col-lg-3"></div>
        <div class="col-xs-12 col-lg-6">
    <figure>
    <video class="media" controls>
        <source src="videos/confectionery1920x1080.mp4" type="video/mp4">
        <source src="videos/confectionery1920x1080.webm" type="video/webm">
        Sorry, your browser doesn't support embeded videos.
    </video>
    </figure>
    <figcaption class="right">
        <p><music/> Music used in presentation from <a href="https://www.bensound.com">www.bensound.com</a></p>
        <p><images-attribution/> <a href="https://github.com/kamilhello/kamilhello.github.io">Attribution</a></p>
    </figcaption>
    </div>
        <div class="col-xs-12 col-lg-3"></div>
    </div>
</template>
<script>
import music from '../components/icons/Music';
import imagesAttribution from '../components/icons/ImagesAttribution';
export default{
    name: 'Projects',
    components: {music, imagesAttribution,},
}
</script>
<style lang="scss" scoped>
@import 'bootstrap/scss/bootstrap-grid.scss';
@import '../../scss/variables/colors.scss';
.row{
    margin:0;
}
figure{
    margin: 0;
}
.pad10{
    padding: 10px;
}
.picture{
    display: block;
    width:100%;
}
li{
    margin-left: 40px;
}
.media{
    margin-top: 15px;
    width: 100%;
}
figcaption{
    color: #d1d5db;
}
figcaption p{
    margin: 0;
}
.right{
    text-align: right;
}
figcaption a{
    color: silver;
    text-decoration: none;
}
figcaption a:hover{
    color: $toogle;
}
p{
    color: $target;
}
p b{
    color: $whiteColor;
}
</style>