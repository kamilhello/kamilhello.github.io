<template>
    <h3 class="title">Contact</h3>
    <div class="row">
        <div class="col-xs-12 center">
            <ul class="contact">
                <li><a href="https://github.com/kamilhello/" target="_blank"><github/> <span class="line">GitHub</span></a></li>
                <li><a href="mailto:kamil.mymail@protonmail.com"><envelope/> <span class="line">kamil.mymail@protonmail.com</span></a></li>
            </ul>
            <shakingHands/>
        </div>
    </div>
</template>
<script>
import github from '../components/icons/Github';
import envelope from '../components/icons/Envelope';
import shakingHands from '../components/icons/ShakingHands';
export default{
    name: 'Contact',
    components: {github, envelope,shakingHands },
}
</script>
<style lang="scss" scoped>
@import '../../scss/variables/colors';
@import 'bootstrap/scss/bootstrap-grid';
.row{
    margin: 0;
}
.center{
    text-align: center;
}
.contact{
    display: inline-block;
    list-style-type: none;
    margin-bottom: 18px;
}
.contact li{
    text-align: left;
}
a{
    color: $bkFooter;
    text-decoration: none;
}
.line{
    line-height: 40px;
    margin-left: 5px;
}
</style>