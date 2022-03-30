<template>
    <h3 class="title">Skills</h3>
    <div class="row">
        <div class="col-xs-12 col-sm-6 col-lg-4 pad">
            <div class="card">
                <div class="text">
                    <h4>Laravel & vue</h4>
                    <p>Laravel Mix</p>
                    <p>Laravel packages:</p>
                    <ul>
                        <li>Fortify</li>
                        <li>Sanctum </li>
                    </ul>
                    <p>Vue SFC</p>
                </div>
            </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-lg-4 pad">
            <div class="card">
                <div class="text">
                    <h4>Languages & Databases</h4>
                    <ul>
                        <li>PHP OOP</li>
                        <li>MySql</li>
                        <li>HTML/CSS/SASS</li>
                        <li>Javascript</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-lg-4 pad">
            <div class="card">
                <div class="text">
                    <h4>Docker & Laravel Sail</h4>
                        <docker :T="5000" :A="3" :lambda="50"/>
                    <p>Basic knowledge of Docker environments for local development.</p>
                </div>
            </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-lg-4 pad">
            <div class="card deployment">
                <div class="text">
                    <h4>Deployment</h4>
                    <p>Git, GitHub Actions</p>
                </div>
            </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-lg-4 pad">
            <div class="card">
                <div class="text">
                    <h4>API</h4>
                    <ul>
                        <li>Axios</li>
                        <li>Json</li>
                        <li>Postman</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-lg-4">
        </div>
    </div>
</template>
<script>
import docker from '../components/icons/Docker';
export default{
    components: {docker, },
    name: 'Skills',
    data (){
        return {}
    }
}
</script>
<style lang="scss" scoped>
@import 'bootstrap/scss/bootstrap-grid.scss';
@import '../../scss/variables/colors';
.row{
    margin:0;
}
.pad{
    padding: 10px;
}
.card{
    position: relative;
    width: 100%;
    padding-top: 56.25%;
    background-color: $bk;
    overflow: auto;
}
.text{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    text-align: center;
}
.text ul{
    display: inline-block;
    margin: auto;
    text-align: left;
}
.deployment{
    background-image: url('/images/deployment.jpg');
    background-size: cover;
}
</style>