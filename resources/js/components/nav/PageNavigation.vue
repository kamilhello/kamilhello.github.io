<template>
    <nav>
        <toogle/>
        <div class="menu menu-mobile">
            <div class="menu_shadow"></div>
            <div class="menu_background"></div>
            <ul class="menu_links">
                <li @click="addActive" class="menu_list active"><a class="menu_link" href="#home">Home</a></li>
                <li @click="addActive" class="menu_list"><a class="menu_link" href="#skills">Skills</a></li>
                <li @click="addActive" class="menu_list"><a class="menu_link" href="#projects">Projects</a></li>
                <li @click="addActive" class="menu_list"><a class="menu_link" href="#contact">Contact</a></li>
            </ul>
        </div>
        <div class="menu menu-desktop">
            <ul class="menu_links">
                <li @click="addActive" class="menu_list active"><a class="menu_link" href="#home">Home</a></li>
                <li @click="addActive" class="menu_list"><a class="menu_link" href="#skills">Skills</a></li>
                <li @click="addActive" class="menu_list"><a class="menu_link" href="#projects">Projects</a></li>
                <li @click="addActive" class="menu_list"><a class="menu_link" href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>
</template>
<script>
import toogle from './Toogle';
export default {
    components: {toogle},
    data() {
        return {}
    },
    methods: {
        addActive(event) {
            const active = document.querySelectorAll('.active');
            for(let i=0; i < active.length;i++)
                active[i].setAttribute('class','menu_list');

            const menuList = document.querySelectorAll('.menu_list');

            if(event.target.getAttribute('class').indexOf('menu_link') != -1)
                {
                    const list = event.target.parentNode;
                    for(let i=0; i < menuList.length;i++)
                        if(list.firstChild.innerHTML == menuList[i].firstChild.innerHTML)
                            menuList[i].setAttribute('class','menu_list active');
                }
            else
                {
                    const list = event.target;
                    for(let i=0; i < menuList.length;i++)
                        if(list.firstChild.innerHTML == menuList[i].firstChild.innerHTML)
                            menuList[i].setAttribute('class','menu_list active');
                }
            
            //Closing navigation menu on small screen
            const menuDesktop = document.querySelector('.menu-desktop');
            const displayValue = window.getComputedStyle(menuDesktop).getPropertyValue('display');
            
            if(displayValue === 'none')
                this.closeNav();
        },
        closeNav() {
            const menu = document.querySelector('.menu-mobile');
            const menuBackground = document.querySelector('.menu_background');
            const navLinks = document.querySelectorAll('.menu-mobile .menu_link');
            const toogle = document.querySelectorAll('.menu_toogle span');
            const menuLinks = document.querySelector('.menu-mobile .menu_links');

            menuBackground.style.display = "block";
                menu.style.width = "0";
                menu.style.opacity = 0;
                for(let i=0;i<3;i++)
                    toogle[i].style.transition = "top 0.4s 0.4s,transform 0.4s";
                for(let i=0;i<3;i++)
                    toogle[i].style.transform = "rotate(0)";
            
                    toogle[0].style.top = "12px";
                    toogle[1].style.top = "24px";
                    toogle[2].style.top = "36px";

                    toogle[0].style.width = "32px";

                for(let i=0;i < navLinks.length;i++)
                    navLinks[i].setAttribute('class','menu_link');
            
                    menuLinks.style.transition = "none";
                    menuLinks.style.height = "0";
        },
    },
}
</script>
<style lang="scss">
@import '../../../scss/variables/colors';
.menu{
    list-style-type: none;
    margin:0;
    padding:0;
    display:inline-block;
}
.active{
    border-bottom:solid 2px $color7;
}
.menu_toogle{
    display: none;
    position: fixed;
    z-index: 3;
    top: 7px;
    right: 13px;
    width: 50px;
    height: 50px;
    cursor: pointer;
}
@media screen and (min-width:992px){
    .menu{
        border-bottom: $lightGray solid 1px;
    }
    .menu-mobile{
        display: none;
    }
    .menu-desktop{
        position: fixed;
        top: 0;
        left: 0;
        height:65px;
        width:100%;
        opacity:1;
        background-color: $bkColor;
        z-index: 1;
    }
    .menu_background{
        display: none;
    }
    .menu_list{
        float: left;
        width:120px;
        text-align: center;
    }
    .menu_link{
        display: block;
        text-decoration: none;
        height:63px;
        color:$whiteColor;
        line-height:64px;
        text-align:center;
        outline: none;
    }
    .menu_link:hover{
        background-color: $color5;
    }
    .menu_link:active{
        background-color: $color6;
    }
    .menu_list{
        display:inline-block;
    }
}
@media screen and (max-width:991px){
    .menu-desktop{
        display: none;
    }
    .menu-mobile{
        position: fixed;
        z-index: 1;
        top: 0;
        right: 0;
        opacity: 0;
        width: 0;
        height: 100vh;
        background-color: #6c757d;
        image-orientation: flip;
        background-image: url("/images/background.jpg");
        background-size: 100% 100%;
        overflow-y: auto;
        overflow-x: hidden;
        transition: width .8s, opacity .8s;
    }
    .menu_shadow{
        display: block;
        position:absolute;
        top: 0;
        left: 0;
        width:100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.25);
    }
    .menu_background{
        display: none;
        position: absolute;
        top: 0;
        z-index: 2;
        width: 100%;
        height: 100%;
        background-color: rgb(0, 0, 0);
    }
    .menu_links{
        position: relative;
        top: 75px;
        left: 20px;
        width: 220px;
        list-style: none;
        padding: 0;
        margin: 0;
        overflow: hidden;
        height: 0;
        transition: height 3.8s;
    }
    .menu_link{
        display: block;
        text-decoration: none;
        color: $whiteColor;
        font-size: 16px;
        line-height: 85px;
        text-align: right;
        transition: line-height .8s;
        border-bottom: solid 1px rgba(255, 255, 255, 0.4);
    }
    .line40{
        line-height: 40px;
    }
    .menu_toogle{
        display: block;
    }
    .menu_toogle span{
        position: absolute;
        right: 7px;
        display: block;
        background-color: $toogle;
        width: 36px;
        height: 2px;
        border-radius: 2px;
    }
    .menu_toogle span:nth-child(1){
        top: 12px;
        width: 32px;
    }
    .menu_toogle span:nth-child(2){
        top:24px;
    }
    .menu_toogle span:nth-child(3){
        top:36px;
    }
}
</style>