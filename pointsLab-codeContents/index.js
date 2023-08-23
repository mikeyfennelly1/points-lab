// Height adjust feature
const banner = document.querySelector('.banner');
const navbar = document.querySelector('.topnav');
const mainLandingContent = document.querySelector('.contentLeft');
const mainHeight = banner.offsetHeight + navbar.offsetHeight + mainLandingContent.offsetHeight;
console.log(mainHeight);
const heightAdjuster = document.querySelector('.heightAdjuster2');


// heightAdjuster.style.height = mainHeight + "px"; 

let line = document.querySelector('.line');
line.style.top = heightAdjuster.offsetHeight + 915 + "px";
console.log(line.style.top);


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
        
        all_content.forEach(content=>{content.classList.remove('contentActive')})
        all_content.forEach(content=>{content.classList.add('contentInactive')})
        all_content[index].classList.add('contentActive');
        all_content[index].classList.remove('contentInactive');

        // line.style.height = e.target.offsetHeight + "px"
        line.style.top = e.target.offsetTop + "px";
        console.log(e.target.offsetTop);
})
});

const rhs = document.querySelector('.rhs');
const gliders = document.querySelectorAll('.glider');
const carousel = document.querySelectorAll('.carousel')

const carousel1 = document.querySelector('.carousel1')
const carousel2 = document.querySelector('.carousel2')
const carousel3 = document.querySelector('.carousel3')


// const leftButtonClick = () => {
//     rhs.style.display = 'none';
// }

// const glider1 = () => {
//     const carousel1 = document.querySelector('.carousel1');

//     carousel1.style.display = 'none';
//     carousel1.classList.add('active');
// }

let activeIndex = 0;

gliders.forEach((glider, index)=> {
    glider.addEventListener('click', (e)=>{
        gliders.forEach(glider=>{glider.classList.remove('gliderActive')});
        gliders.forEach(glider=>{glider.classList.add('gliderInactive')})
        
        glider.classList.remove('gliderInactive');
        glider.classList.add('gliderActive');

        // const glider1 = document.getElementById('glider1');
        // const nextIndex = activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;
    })
});