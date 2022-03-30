<template>
    <svg class="docker" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M349.9 236.3h-66.1v-59.4h66.1v59.4zm0-204.3h-66.1v60.7h66.1V32zm78.2 144.8H362v59.4h66.1v-59.4zm-156.3-72.1h-66.1v60.1h66.1v-60.1zm78.1 0h-66.1v60.1h66.1v-60.1zm276.8 100c-14.4-9.7-47.6-13.2-73.1-8.4-3.3-24-16.7-44.9-41.1-63.7l-14-9.3-9.3 14c-18.4 27.8-23.4 73.6-3.7 103.8-8.7 4.7-25.8 11.1-48.4 10.7H2.4c-8.7 50.8 5.8 116.8 44 162.1 37.1 43.9 92.7 66.2 165.4 66.2 157.4 0 273.9-72.5 328.4-204.2 21.4.4 67.6.1 91.3-45.2 1.5-2.5 6.6-13.2 8.5-17.1l-13.3-8.9zm-511.1-27.9h-66v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm-78.1-72.1h-66.1v60.1h66.1v-60.1z"/></svg>
</template>
<script>
export default {
    name: 'Docker',
    props: [
            'T',      //period in miliseconds
            'A',      //wave amplitude in pixels
            'lambda', //wave length in pixels
            ],
    data (){
        return {
            start: undefined,
            duration: 2*this.T,     //animation duration
            pi: 2*Math.PI,
        }
    },
    created(){
        window.requestAnimationFrame(this.step);
    },
    methods: {
        step(timestamp)
        {
            const docker = document.querySelector('.docker');

            if(this.start === undefined || (timestamp - this.start) > this.duration)
            {
                this.start = timestamp;
                docker.style.transform = "translateY(0) rotate(0)";
                docker.style.opacity = 0;
            }

            const elapsed = timestamp - this.start;
            const arg = Number((this.pi*elapsed)/this.T).toFixed(6);
            const angle = Math.atan(Math.cos(arg))*15.91549;
            const y = -Number(Math.sin(arg)*this.A).toFixed(2);
            const x = this.lambda - Number((elapsed*this.lambda)/this.T).toFixed(2);

            docker.style.transform = "translate("+ x +"px,"+ y +"px) rotate("+ angle +"deg)";

            if(elapsed < 700 || (this.duration - elapsed) < 700)
            {
                let opacity;
                if(elapsed < 700)
                    opacity = (elapsed/700).toFixed(1);
                else
                    opacity = ((this.duration - elapsed)/700).toFixed(1);

                docker.style.opacity = opacity;
            }

            setTimeout(function () { window.requestAnimationFrame(this.step.bind(this)); }.bind(this), 20);
        }
    },
}
</script>
<style lang="scss" scoped>
@import '../../../scss/variables/colors';
.docker{
    width: 40px;
    height: 40px;
    fill: $bkFooter;
    vertical-align: middle;
    transform-origin: 15px 30.5px;
}
</style>