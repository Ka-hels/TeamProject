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

function checkAnswer(){
    var check = 0
    var ans1 = document.getElementbyId("ans1")
    var ans2 = document.getElementbyId("ans2")
    var ans3 = document.getElementbyId("ans3")
    if (ans1.value == ans1.className){
        check += 1
    }
    if (ans2.value == ans2.className){
        check += 1
    }
    if (ans3.value == ans3.className){
        check += 1
    }
    if (check == 3){
        correctAnswer()
    } else{
        wrongAnswer()
    }
}

function correctAnswer(){
    var x = document.getElementById("right")
    x.style.display = float;
}

function wrongAnswer(){
    
}

window.addEventListener('resize', adjustSidenavHeight);
window.addEventListener('load', adjustSidenavHeight);
window.addEventListener('scroll', adjustSidenavHeight);

