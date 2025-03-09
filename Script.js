function adjustContentBoxHeight(){
    const navbar = document.querySelector(".navbar");
    let navbarHeight = navbar.getBoundingClientRect().top;
    let navbarSizeVertical = navbar.offsetHeight;
    document.querySelector(".ContentsBoxContainer").style.marginTop = `calc(${navbarHeight}px + ${navbarSizeVertical}px)`;
}

window.addEventListener('resize', adjustContentBoxHeight);
window.addEventListener('load', adjustContentBoxHeight);
window.addEventListener('scroll', adjustContentBoxHeight);
