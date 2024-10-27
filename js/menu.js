var hamburgermenu = document.getElementById('hamburgermenu').addEventListener('click', openMenu)
var close = document.getElementById('close').addEventListener('click', closeMenu)
function openMenu(){
    document.getElementById('menu').style.transform = "none";
    document.getElementById('menu').style.opacity = "1";
    document.body.style.overflow = "hidden"
}

function closeMenu() {
    document.getElementById('menu').style.transform = "translateX(-100%)";
    document.getElementById('menu').style.opacity = "0";
    document.body.style.overflow = "auto"
}