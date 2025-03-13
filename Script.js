function adjustSidenavHeight()//Changes the sidenav height to avoid overlap with top or bot nav
{
    const topnav = document.querySelector(".topnav");
    const sidenav = document.querySelector(".sidenav");
    const botnav = document.querySelector(".botnav");

    let topnavHeight = topnav.offsetHeight;
    let topnavVerticalPos = topnav.getBoundingClientRect().top;
    
    let botnavHeight = botnav.offsetHeight;
    let botnavVerticalPos = botnav.getBoundingClientRect().top;
    
    
    // Adjust the margin-top of sidenav when topnav is sticky
    if (topnavVerticalPos <= 0) {
        sidenav.style.marginTop = `${topnavHeight}px`; // This ensures the sidenav is pushed below the sticky topnav
    } else{
        sidenav.style.marginTop = `calc(${topnavVerticalPos}px + ${topnavHeight}px)`;
    }
    let contentHeight = document.documentElement.scrollHeight - window.innerHeight; // Total scrollable height
    let currentScrollPos = window.scrollY;
    
    document.querySelector(".sidenav").style.marginTop = `calc(${topnavVerticalPos}px + ${topnavHeight}px)`;
    document.querySelector(".sidenav").style.marginBottom = `${botnavHeight}px`;
    sidenav.style.height = `${contentHeight}px`

    // Adjust the bottom margin of the sidenav when the botnav is visible in the viewport
    if (botnavVerticalPos <= window.innerHeight) {
        sidenav.style.marginBottom = `${botnavHeight}px`; // Prevent overlap with botnav
    } else {
        sidenav.style.marginBottom = '0'; // Reset when botnav is out of view
    }

    // Log current computed styles to debug margin-top issues
    console.log("Sidenav top:", sidenav.style.top, "Sidenav margin-top:", window.getComputedStyle(sidenav).marginTop);

}

window.addEventListener('resize', adjustSidenavHeight);
window.addEventListener('load', adjustSidenavHeight);
window.addEventListener('scroll', adjustSidenavHeight);
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function checkAnswer(event) {
    event.preventDefault(); // Prevent form submission & page refresh

    let correctCount = 0;
    const ans1 = document.getElementById("ans1");
    const ans2 = document.getElementById("ans2");
    const ans3 = document.getElementById("ans3");

    // Check if selected answers are correct
    if (!ans1.checked && ans2.checked && !ans3.checked) {
        document.getElementById("right").style.display = "block";
        document.getElementById("wrong").style.display = "none";
    } else {
        document.getElementById("wrong").style.display = "block";
        document.getElementById("right").style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".quiz-container").forEach(container => {
        const button = container.querySelector(".check-answer");
        button.addEventListener("click", function() {
            const checkboxes = container.querySelectorAll("input[type='checkbox']");
            const correctAnswers = container.querySelectorAll(".rightAnswer:checked");
            const incorrectAnswers = container.querySelectorAll(".wrongAnswer:checked");

            const rightMessage = container.querySelector(".right-message");
            const wrongMessage = container.querySelector(".wrong-message");

            if (correctAnswers.length > 0 && incorrectAnswers.length === 0) {
                rightMessage.style.display = "block";
                wrongMessage.style.display = "none";
            } else {
                rightMessage.style.display = "none";
                wrongMessage.style.display = "block";
            }
        });
    });
});