const loadingOverlay = document.getElementById("loading-overlay");
const loadingProgress = document.getElementById("loading-bar");

document.onreadystatechange = function () {
    if (document.readyState == 'loading') {
        loadingProgress.style.width = "20%";
    } else if (document.readyState == 'interactive') {
        loadingProgress.style.width = "50%";
    } else if (document.readyState == 'complete') {
        loadingProgress.style.width = "100%";
    }
};

function widthTransComplete(event) {
    if (event.propertyName === 'width') {
        console.log('Width transition completed.');
        loadingOverlay.style.display = "none";
        document.body.style.overflow = "scroll";
    }
}

loadingProgress.addEventListener('transitionend', widthTransComplete);

// ---------------------------------------------- //

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
const menuOverlay = document.getElementById("menu-overlay");

openMenu.addEventListener("click", () => {
    if (navBar[0].style.display == '') {
        openMenu.style.display = "none";
        closeMenu.style.display = "inline-block";
        menuBox.style.display = "flex";
        menuOverlay.style.display = "block";
        menuOverlay.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))"
    }
});

closeMenu.addEventListener("click", () => {
    if (navBar[0].style.display == '') {
        openMenu.style.display = "inline-block";
        closeMenu.style.display = "none";
        menuBox.style.display = "none";
        menuOverlay.style.backgroundImage = "none";
    }
});

menuBox.addEventListener("click", () => {
    if (navBar[0].style.display == '') {
        openMenu.style.display = "inline-block";
        closeMenu.style.display = "none";
        menuBox.style.display = "none";
        menuOverlay.style.backgroundImage = "none";
    }
});

menuOverlay.addEventListener("click", () => {
    if (navBar[0].style.display == '') {
        openMenu.style.display = "inline-block";
        closeMenu.style.display = "none";
        menuBox.style.display = "none";
        menuOverlay.style.display = "none";
        menuOverlay.style.backgroundImage = "none";
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
