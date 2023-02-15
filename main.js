let iconMenu = document.getElementById('iconMenu');
let iconMenuClose = document.getElementById('iconMenuClose')
let boxMenu = document.querySelector('.menuOpen');

let backBlack = document.querySelector('.blackBack')

function openMenu(){
    setTimeout( function(){
        boxMenu.style.display = "block"
        boxMenu.style.opacity = "1"
        backBlack.style.opacity = '1'
    }, 100)
}

function closeMenu(){
    boxMenu.style.display = "none"
    boxMenu.style.opacity = "0"
    backBlack.style.opacity = '0'
}






iconMenuClose.addEventListener('click', closeMenu)
iconMenu.addEventListener('click', openMenu);