const pageHeader = document.getElementById("header");
const pageSections = document.querySelectorAll(".main-sections");

document.addEventListener('scroll', () => {
    setTimeout( () => {
        pageHeader.style.boxShadow = '0 0.01rem 10px var(--black-var2)';
        setTimeout(() => {
            pageHeader.style.boxShadow = 'var(--box-shade)';
        }, 500);
    });
});

// ---------------------------------------------- //

const openMenu = document.getElementById("open-btn");
const closeMenu = document.getElementById("close-btn");
const navBar = document.getElementsByClassName("nav-bar");
const menuBox = document.getElementById("menu-box");

openMenu.addEventListener("click", () => {
    if (navBar[0].style.display == '') {
        openMenu.style.display = "none";
        closeMenu.style.display = "inline-block";
        menuBox.style.display = "flex";
    }
});

closeMenu.addEventListener("click", () => {
    if (navBar[0].style.display == '') {
        openMenu.style.display = "inline-block";
        closeMenu.style.display = "none";
        menuBox.style.display = "none";
    }
});

menuBox.addEventListener("click", () => {
    if (navBar[0].style.display == '') {
        openMenu.style.display = "inline-block";
        closeMenu.style.display = "none";
        menuBox.style.display = "none";
    }
});

// ---------------------------------------------- //

const rateStars = document.getElementsByClassName('rate-stars');

for (let i = 0; i < rateStars.length; i++) {
    rateStars[i].addEventListener('click', () => {
      for (let i = 0; i <= Array.from(rateStars).indexOf(event.target); i++) {
        rateStars[i].classList.remove("bx-star");
        rateStars[i].classList.add("bxs-star");
      }
      for (let i = Array.from(rateStars).indexOf(event.target) +1; i < rateStars.length; i++) {
        if (rateStars[i].classList.contains("bxs-star")) {

          rateStars[i].classList.remove("bxs-star");
          rateStars[i].classList.add("bx-star")
        }
      }
    });
}