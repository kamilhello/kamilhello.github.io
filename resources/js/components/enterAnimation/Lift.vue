<template>
    <div class="actuator" id="lift"><div class="top"></div><div class="ball"><span v-if="!link">{{letter}}</span><a v-if="link" href="#skills"><span>MORE</span></a></div></div>
</template>
<script>
export default{
    props: ['h','letter','angle', 'x', 'y','opacity', 'ballOpacity','height', 'width', 'borderRadius', 'lineHeight', 'fontSize', 'link'],
    data (){
        return {
            initialH: 10,
        }
    },
    mounted (){
        this.lift(this.initialH);
    },
    beforeUpdate() {
        this.lift(this.h);
        this.changeAngle();
        this.changeOpacity();
    },
    methods: {
        lift(h) {
            const actuator = document.getElementById('lift');

            actuator.style.height = h + 'px';
        },
        changeAngle() {
            const ball = document.querySelector('.ball');

                ball.style.transform = "translate("+this.x+"px, "+this.y+"px) rotate("+this.angle+"deg) ";
                ball.style.height = this.height;
                ball.style.width = this.width;
                ball.style.borderRadius = this.borderRadius;
                ball.style.lineHeight = this.lineHeight;
                ball.style.fontSize = this.fontSize;
                ball.style.opacity = this.ballOpacity;
        },
        changeOpacity() {
            const span = document.querySelector('.ball span');

            span.style.opacity = this.opacity;
        }
    },
}
</script>
<style lang="scss">
@import '../../../scss/variables/colors';
$topWidth: 110px;
$topHeight: 5px;
$actuatorWidth: 40px;
$actuatorHalf: 20px;
$left: 35px;
$ballSize: 50px;

.actuator{
    position: absolute;
    bottom: 0;
    left: $left;
    width: $actuatorWidth;
    border-left: solid 1px $toogle;
    border-right: solid 1px $toogle;
}
.top{
    position: absolute;
    top: -$topHeight;
    left: -$left;
    width: $topWidth;
    height: $topHeight;
    border: solid 1px $toogle;
}
.ball{
    display:flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -55px;
    left: -5px;
    width: $ballSize;
    height: $ballSize;
    border-radius: 50%;
    border: solid 1px $toogle;
    text-align: center;
    line-height: $ballSize;
    font-size: 30px;
}
.ball span{
    display: block;
    line-height: inherit;
    font-size: inherit;
    font-weight: bold;
}
.ball a{
    display: block;
    width: inherit;
    height: inherit;
    border-radius: inherit;
    text-decoration: none;
    color: $whiteColor;
}
.ball a:hover{
    background-color: $color5;
}
.ball a:active{
    background-color: $color6;
}
.ball a span{
    opacity: 0;
}
</style>