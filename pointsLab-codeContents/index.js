const tabs = document.querySelectorAll('.tab_btn');
const all_content = document.querySelectorAll('.content');

var contentBox = document.querySelector('content');
contentBox.style.top = mainLandingContent.offsetTop + 'px';

tabs.forEach((tab, index)=> {
    tab.addEventListener('click', (e)=>{
        tabs.forEach(tab=>{tab.classList.remove('active')});
        tab.classList.add('active');

        var line = document.querySelector('.line');
        line.style.width = e.target.offsetHeight + "px"
        line.style.left = e.target.offsetTop + "px"

        all_content.forEach(content=>{content.classList.remove('active')});
        all_content[index].classList.add('active');
    })
})