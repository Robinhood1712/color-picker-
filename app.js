const colors = document.querySelectorAll('.color');
const copied = document.querySelector('.copied');
const value = document.querySelector('.value h6');
let backgroundColor = 0;


colors.forEach(color=>{
    color.addEventListener('click', function(){
        backgroundColor = window.getComputedStyle(color).backgroundColor;
        navigator.clipboard.writeText(backgroundColor);
        console.log(backgroundColor); 
        value.innerHTML = backgroundColor;
        copied.style.backgroundColor = backgroundColor;
        copied.classList.toggle('do-not-show');
        window.setTimeout(function(){
            copied.classList.add('do-not-show')
        }, 800)
    })
})