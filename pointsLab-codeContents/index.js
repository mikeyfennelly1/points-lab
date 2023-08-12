// Height adjust feature
const banner = document.querySelector('.banner');
const navbar = document.querySelector('.topnav');
const mainLandingContent = document.querySelector('.contentLeft');
const mainHeight = banner.offsetHeight + navbar.offsetHeight + mainLandingContent.offsetHeight;
const heightAdjuster = document.querySelector('.heightAdjuster');


heightAdjuster.style.height = mainHeight + "px"; 

let line = document.querySelector('.line');
line.style.top = heightAdjuster.offsetHeight + 130 + "px";

console.log('heightAdjuster: ' + heightAdjuster.offsetHeight);
console.log('line.style.top: ' + line.style.top);

// tabs feature

const tabs = document.querySelectorAll('.tab_btn');
const all_content = document.querySelectorAll('.content');

tabs.forEach((tab, index)=> {
    tab.addEventListener('click', (e)=>{
        tabs.forEach(tab=>{tab.classList.remove('active')});
        tabs.forEach(tab=>{tab.classList.add('inactive')});
        
        tab.classList.remove('inactive');
        tab.classList.add('active');

        var line = document.querySelector('.line');
        line.style.height = e.target.offsetHeight + "px"
        line.style.top = e.target.offsetTop + "px";
        console.log(line.style.height);
        
        all_content.forEach(content=>{content.classList.remove('contentActive')})
        all_content.forEach(content=>{content.classList.add('contentInactive')})
        all_content[index].classList.add('contentActive');
        all_content[index].classList.remove('contentInactive');
})
})


const element = document.querySelector(".active");
const cssObj = window.getComputedStyle(element, null);

let display = cssObj.getPropertyValue("display");
console.log(display)