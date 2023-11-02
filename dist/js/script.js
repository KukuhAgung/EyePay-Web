window.onscroll = function(){
    const header = document.querySelector('header');
    const fixNav = header.offsetTop;

    if(window.pageYOffset > fixNav){
        header.classList.add('navbar-fix');
    }else{
        header.classList.remove('navbar-fix');
    }
}

const hamburger =document.querySelector('#hamburger');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
})