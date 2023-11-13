// Height adjust feature
const banner = document.querySelector('.banner');
const navbar = document.querySelector('.topnav');
const mainLandingContent = document.querySelector('.contentLeft');
const mainHeight = banner.offsetHeight + navbar.offsetHeight + mainLandingContent.offsetHeight;
const heightAdjuster = document.querySelector('.heightAdjuster2');


let line = document.querySelector('.line');
// line.style.top = (activeLocation.top - 30) + "px";

let container = document.querySelector('.container');
let containerLocation = container.getBoundingClientRect();
let active = document.querySelector('.active');
let activeLocation = active.getBoundingClientRect();
offsetLineInitial = activeLocation.top - containerLocation.top;
line.style.top = offsetLineInitial + 5 + "px";

// Side navbar
const burgerMenu = document.querySelector('.burgerMenu');
const x = document.querySelector('.x');
const sidebar = document.querySelector('.sideNav');

burgerMenu.addEventListener('click', (event)=>{
    sidebar.style.left = '0px';
    burgerMenu.style.display = 'none';
    x.style.display = 'block';
})
x.addEventListener('click', (event)=>{
    sidebar.style.left = '-400px';
    burgerMenu.style.display = 'block';
    x.style.display = 'none';
})


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
const carousels = document.querySelectorAll('.carousel')




let activeIndex = 0;

gliders.forEach((glider, index)=> {
    glider.addEventListener('click', (e)=>{
        gliders.forEach(glider=>{glider.classList.remove('gliderActive')});
        gliders.forEach(glider=>{glider.classList.add('gliderInactive')})
        
        glider.classList.remove('gliderInactive');
        glider.classList.add('gliderActive');
        
        let activeGliderIndex = glider.dataset.index;
        console.log(activeGliderIndex);

        carousels.forEach(function(carousel) {
            let carouselIndex = carousel.dataset.index;
            carousel.classList.remove("gliderInactive")
            carousel.classList.remove("gliderActive")
            carousel.classList.add("gliderInactive")
            if (carouselIndex === activeGliderIndex) {
                console.log("true for: " + carouselIndex)
                carousel.classList.add("gliderActive")
            }
        });

        // const glider1 = document.getElementById('glider1');
        // const nextIndex = activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;
    })
});





const subscribersUrl = 'http://localhost:3000/subscribers'

async function getData() {
    const request = await fetch(subscribersUrl)
    const data = await response.json()
    console.log(data)
} 

getData()