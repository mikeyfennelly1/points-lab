const navbar = document.querySelector('topnav');
const banner = document.querySelector('banner');
const mainContent = document.querySelector('mainLandingContent');
let landingHeight = navbar.offsetHeight + banner.offsetHeight + mainContent.offsetHeight;
console.log(landingHeight);

const heightAdjuster = document.querySelector('heightAdjuster');
heightAdjuster.style.height = landingHeight + "px";

const tabs = document.querySelectorAll('.tab_btn');
const all_content = document.querySelectorAll('.content');

tabs.forEach((tab, index)=> {
    tab.addEventListener('click', (e)=>{
        tabs.forEach(tab=>{tab.classList.remove('active')});
        tab.classList.add('active');

        
        var line = document.querySelector('.line');
        line.style.height = e.target.offsetHeight + "px"
        line.style.top = e.target.offsetTop + "px"
        
        all_content.forEach(content=>{content.classList.remove('active')})
        all_content[index].classList.add('active');
})
})
