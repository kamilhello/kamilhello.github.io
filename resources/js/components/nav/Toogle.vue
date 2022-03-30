<template>
    <div @click="changeMenu" class="menu_toogle"><span></span><span></span><span></span></div>
</template>
<script>
export default{
    data(){
        return {}
    },
    methods: {
        changeMenu() {
            const menu = document.querySelector('.menu-mobile');
            const menuBackground = document.querySelector('.menu_background');
            const navLinks = document.querySelectorAll('.menu-mobile .menu_link');
            const toogle = document.querySelectorAll('.menu_toogle span');
            const menuLinks = document.querySelector('.menu-mobile .menu_links');
            
            if(menu.offsetWidth == "0")
            {
                menuBackground.style.display = "none";
                menu.style.width = "260px";
                menu.style.opacity = 1;
            
                for(let i=0;i < navLinks.length;i++)
                    navLinks[i].setAttribute('class','menu_link line40');
            
                menuLinks.style.transition = "height .8s";
                menuLinks.style.height = "200px";
                for(let i=0;i<3;i++)
                        toogle[i].style.transition = "width 0.4s,top 0.4s,transform 0.4s 0.4s";
                    toogle[0].style.width = "36px";
                for(let j=0;j<3;j++)
                    toogle[j].style.top = "24px";
                toogle[0].style.transform = "rotate(45deg)";
                toogle[1].style.transform = "rotate(45deg)";
                toogle[2].style.transform = "rotate(-45deg)";
            }
            else
            {
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
            }
        },
    },
}
</script>