function adjustSidenavHeight()//Changes the sidenav height to avoid overlap with top or bot nav
{
    const topnav = document.querySelector(".topnav");
    let topnavVerticalPos = topnav.getBoundingClientRect().top;
    let topnavHeight = topnav.offsetHeight;
    
    const botnav = document.querySelector(".botnav")
    let botnavHeight = botnav.offsetHeight;
    
    document.querySelector(".sidenav").style.marginTop = `calc(${topnavVerticalPos}px + ${topnavHeight}px)`;
    document.querySelector(".sidenav").style.marginBottom = `${botnavHeight}px`;
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

window.addEventListener('resize', adjustSidenavHeight);
window.addEventListener('load', adjustSidenavHeight);
window.addEventListener('scroll', adjustSidenavHeight);

