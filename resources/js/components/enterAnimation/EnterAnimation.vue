<template>
    <div class="name">
        <h1><i>Kamil Rutkowski</i></h1>
        <span>present</span>
    </div>
    <div class="box" id="box"><div></div><div></div><div></div><div></div><div id="target"></div><span id="text">Ingenuity</span></div>
    <div class="position"><lift :h="h" :letter="letter" :angle="angle" :x="x" :y="y" :opacity="opacity" :ballOpacity="ballOpacity" v-bind="ball" :link="link"/></div>
</template>
<script>
import lift from './Lift';
export default {
    components: {lift,},
        data() {
            return {
                dT: 1500,
                start: undefined,
                h: 10,
                letter: 'I',
                angle: 0,
                x: 0,
                y: 0,
                opacity: 0,
                ballOpacity: 1,
                ball: {
                    borderRadius: '50%',
                    height: '50px',
                    width: '50px',
                    lineHeight: '50px',
                    fontSize: '30px'
                },
                link: false,
                Vx: 140*Math.PI,
            }
        },
        created() {
            requestAnimationFrame(this.step);
        },
        mounted(){
            if(window.innerWidth < 432)
            {
                const position = document.querySelector('.position');

                position.style.left = "calc(50% - 155px)";
                this.Vx = 82*Math.PI;
            }
        },
        methods: {
        step(timestamp)
        {
            const box = document.getElementById('box');

            if(this.start === undefined || (timestamp - this.start) > 14*this.dT)
            {
                this.start = timestamp;
                box.style.opacity = 0;
            }
    
            const elapsed = timestamp - this.start;

            if(elapsed <= this.dT)
                this.showName(elapsed, 0);
            else if(elapsed > this.dT && elapsed <= 2*this.dT)
                this.wait(elapsed);
            else if(elapsed > 2*this.dT && elapsed <= 3*this.dT)
                this.hiddenName(elapsed, 2*this.dT);
            else if(elapsed > 3*this.dT && elapsed <= 4*this.dT)
                this.showText(elapsed, 3*this.dT,"Ingenuity");
            else if(elapsed > 4*this.dT && elapsed <= 5*this.dT)
                this.wait(elapsed);
            else if(elapsed > 5*this.dT && elapsed <= 6*this.dT)
                this.hiddenText(elapsed, 5*this.dT);
            else if(elapsed > 6*this.dT && elapsed <= 7*this.dT)
                this.showText(elapsed, 6*this.dT,"Challange");
            else if(elapsed > 7*this.dT && elapsed <= 8*this.dT)
                this.swing(elapsed, 7*this.dT);
            else if(elapsed > 8*this.dT && elapsed <= 9*this.dT)
                this.hiddenText(elapsed, 8*this.dT);
            else if(elapsed > 9*this.dT && elapsed <= 10*this.dT)
                this.showText(elapsed, 9*this.dT,"Passion");
            else if(elapsed > 10*this.dT && elapsed <= 13*this.dT)
                this.wait(elapsed);
            else if(elapsed > 13*this.dT && elapsed <= 14*this.dT)
                this.hiddenText(elapsed, 13*this.dT);
        },
        wait(elapsed)
        {
            setTimeout(function () { window.requestAnimationFrame(this.step.bind(this)); }.bind(this), 20);
        },
        showName(elapsed,t0)
        {
            const name = document.querySelector('.name');
            const delta = Math.round((elapsed - t0)*10000/this.dT)/10000;
            const opacity = delta.toFixed(1);
            const box = document.getElementById('box');
            const position = document.querySelector('.position');

            box.style.opacity = 0;
            position.style.display = 'none';
            name.style.opacity = opacity;

            setTimeout(function () { window.requestAnimationFrame(this.step.bind(this)); }.bind(this), 20);
        },
        hiddenName(elapsed, t0)
        {
            const name = document.querySelector('.name');
            const delta = (elapsed - t0)/this.dT;
            const opacity = 1 - delta.toFixed(1);
            const box = document.getElementById('box');
            const position = document.querySelector('.position');

            box.style.opacity = 0;
            position.style.display = 'none';
            name.style.opacity = opacity;

            setTimeout(function () { window.requestAnimationFrame(this.step.bind(this)); }.bind(this), 20);
        },
        showText(elapsed, t0, word)
        {
            const box = document.getElementById('box');
            const position = document.querySelector('.position');
            const text = document.getElementById('text');

            const delta = Math.round((elapsed - t0)*10000/this.dT)/10000;
            const opacity = delta.toFixed(1);

            position.style.display = 'block';
            box.style.opacity = opacity;
            text.innerHTML = word;
            if(word == 'Ingenuity')
            {
                this.x = 0;
                this.y = 0;
                this.angle = 0;
                this.ball.height = '50px';
                this.ball.width = '50px';
                this.ball.borderRadius = '50%';
                this.ball.lineHeight = '50px';
                this.ball.fontSize = '30px';
                this.link = false;
                this.letter = 'I';
                this.ballOpacity = 1;
                this.opacity = opacity;
                const newH = Math.round(100*delta) + 10;
                if(this.h != newH)
                  this.h = newH;
            }
            else if(word == 'Challange')
            {
                this.letter = 'C';
                this.opacity = opacity;
            }
            else if(word == 'Passion' && delta <= 0.42)
            {
                this.angle = 0;
                this.x = 50*Math.PI*Math.round(this.Vx*(delta+1))/360;
                const t = delta;
                this.y = 120 - Math.round(170*t - 120*t*t);
                if(this.y >= 115)
                            {
                                const ballH = 50 - (this.y - 115);
                                this.ball.height =  ballH + 'px';
                                this.ball.borderRadius = '50% 50%' + ballH+'px' + ballH+'px';

                                this.letter = '';
                            }
                else
                {
                    const a = (115 - this.y)/45;
                    const ballH = 50 - Math.round(a*10) + 'px';
                    const radius = 50 - Math.round(a*30);
                    const width = 50 + Math.round(a*70);
                    const fontSize = 12 + Math.round(a*10);

                    this.ball.height =  ballH;
                    this.ball.borderRadius = radius + 'px';
                    this.ball.width = width + 'px';
                    this.opacity = opacity;
                    this.link = true;
                    this.ball.lineHeight = ballH;
                    this.ball.fontSize = fontSize + 'px';
                }
            }
            else if(word == 'Passion' && delta>0.42)
            {
                this.ball.height =  '40px';
                this.ball.width = '120px';
                this.ball.borderRadius = '20px';
                this.ball.lineHeight = '40px';
                this.ball.fontSize = '22px';
                this.opacity = opacity;
            }

            setTimeout(function () { window.requestAnimationFrame(this.step.bind(this)); }.bind(this), 20);
        },
        hiddenText(elapsed, t0)
        {
            const box = document.getElementById('box');

            const delta = (elapsed - t0)/this.dT;
            const opacity = 1 - delta.toFixed(1);
            box.style.opacity = opacity;
            this.opacity = opacity;
            if(this.letter == 'C')
                {
                    this.angle = Math.round(this.Vx*delta);
                    this.x = 50*Math.PI*this.angle/360;
                    if(this.angle > 133)
                        {
                            const t = (this.angle - 133)/(this.Vx - 133);
                            this.y = Math.round(120*t*t);
                            if(this.y >= 115)
                            {
                                const ballH = 50 - (this.y - 115);
                                this.ball.height =  ballH + 'px';
                                this.ball.borderRadius = '50% 50%' + ballH+'px' + ballH+'px';
                            }
                        }
                }
            else if(this.link)
                this.ballOpacity = opacity;

            setTimeout(function () { window.requestAnimationFrame(this.step.bind(this)); }.bind(this), 20);
        },
        swing(elapsed, t0)
        {
                const delta = (elapsed - t0)/(2*this.dT);
                this.angle = Math.round(80*Math.sin(4*Math.PI*delta));
                this.x = 50*Math.PI*this.angle/360;

                setTimeout(function () { window.requestAnimationFrame(this.step.bind(this)); }.bind(this), 20);
        }
     }
    }
</script>
<style lang="scss">
@import '../../../scss/variables/colors';
$size: 12px;
.name{
    position: relative;
    top: calc(50% - 40px);
    text-align: center;
    margin: 15px;
}
.name h1{
    line-height: 20px;
    font-size: 20px;
    text-align: center;
    color: $bkFooter;
}
.name span{
    color: $color7;
    line-height: 16px;
    font-size: 16px;
}
.box
{
    position:relative;
    top:calc(50% - 169px);
    margin: auto;
    width: 260px;
    padding: 8px 12px;
    color: $whiteColor;
    font-size: 34px;
    font-weight: bold;
    text-align: center;
}
#target{
    position: absolute;
    top: 10px;
    right: 10px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #90EE90;
    animation: pulse .9s infinite;
}
@keyframes pulse{
    0%{opacity:0}
    30%{opacity:1}
    80%{opacity:1}
    100%{opacity:0}
}
.box div
{
    position: absolute;
    width: $size;
    height: $size;
}
.box div:nth-child(1)
{
    top: 0;
    left: 0;
    border-top: solid 1px $target;
    border-left: solid 1px $target;
}
.box div:nth-child(2)
{
    top: 0;
    right: 0;
    border-top: solid 1px $target;
    border-right: solid 1px $target;
}
.box div:nth-child(3)
{
    bottom: 0;
    left: 0;
    border-bottom: solid 1px $target;
    border-left: solid 1px $target;
}
.box div:nth-child(4)
{
    bottom: 0;
    right: 0;
    border-bottom: solid 1px $target;
    border-right: solid 1px $target;
}

.position{
    display: inline-block; 
    position: relative;
    top: calc(50% + 8px);
    left: calc(50% - 216px);
}
</style>