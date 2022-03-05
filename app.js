
var lastScrollValue = 0;

const nav = document.querySelector("nav");


 function isScrollingDown(){
    let currScrollValue = window.scrollY || window.pageYOffset;
    let scrollingDown = true;
    
    if(currScrollValue > lastScrollValue){
        // down Scroll code
        scrollingDown = false;
    }

    else if(currScrollValue < lastScrollValue){
        // up scroll code
        scrollingDown = true;
    }
    
    lastScrollValue = currScrollValue;
    // lastScrollValue = currScrollValue <= 0 ? 0 : currScrollValue;
    return scrollingDown;
};

const handleNavScroll = () => {
    if(isScrollingDown()){
        nav.classList.add('scrollUp');
        nav.classList.remove('scrollDown');
    }
    else{
        // show Navbar
        nav.classList.add('scrollDown');
        nav.classList.remove('scrollUp');
    }
}

window.addEventListener("scroll" ,handleNavScroll);