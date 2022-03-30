<template>
    <header>
        <page-navigation/>
    </header>
    <main>
        <section id="home" class="homePage">
            <enter-animation/>
        </section>
        <section id="skills" class="page">
            <skills/>
        </section>
        <section id="projects" class="page">
            <projects/>
        </section>
        <section id="contact" class="last-page">
            <contact/>
        </section>
    </main>
    <footer>
        <page-footer/>
    </footer>
</template>
<script>
import pageNavigation from '../components/nav/PageNavigation';
import enterAnimation from '../components/enterAnimation/EnterAnimation';
import skills from './Skills';
import projects from './Projects';
import contact from './Contact';
import pageFooter from './PageFooter';
function debounce(func,timeout){
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}
export default {
    components: {pageNavigation, enterAnimation, skills, projects, contact, pageFooter, },
    data() {
        return {}
    },
    mounted() {
        window.addEventListener('scroll', this.changeActive);
    },
    methods: {
        changeActive: debounce(function(){
            const sections = document.querySelectorAll('section');
            const scrollY = Math.round(window.pageYOffset);
            let current = 0;

            for(let i=1;i < sections.length;i++)
                if(scrollY >= sections[i].offsetTop && sections[current].offsetTop < sections[i].offsetTop)
                    current = i;

            const active = document.querySelectorAll('.active');
            for(let i=0; i < active.length;i++)
                active[i].setAttribute('class','menu_list');

            const menuList = document.querySelectorAll('.menu_list');
            const secttionName = sections[current].getAttribute('id');

                for(let i=0; i < menuList.length;i++)
                    if(secttionName == (menuList[i].firstChild.innerHTML).toLowerCase())
                        menuList[i].setAttribute('class','menu_list active');
        },400),
    },

}
</script>
<style lang="scss">
@import '../../scss/variables/variables';
.homePage{
    height: 500px;
    min-height: 100vh;
    width: 100%;
    overflow: hidden;
}
.page{
    min-height: 100vh;
    width: 100%;
    overflow: hidden;
}
.last-page{
    min-height: calc(100vh - $height);
}
</style>