const stars = document.querySelectorAll(".star_box");
const realStars = document.querySelectorAll(".real-star");
const starBox = document.querySelector(".content_info_star");

function fillFullStar(value) {
    value = value.split(".");
    value = value.map(x => parseInt(x));

    for (var i = 0; i < value[0]; i++) {
        realStars[i].classList.remove('far', 'fas', 'fa-star', 'fa-star-half-alt');
        realStars[i].classList.add('fas', 'fa-star');
    }
    if (value[1]) {
        realStars[value[0]].classList.remove('far', 'fa-star');
        realStars[value[0]].classList.add('fas', 'fa-star-half-alt');
    }
}


function fillStars(event) {
    let value = event.target.getAttribute("value");
    fillFullStar(value);
}

function emptyStars() {
    let value = event.target.getAttribute("value");
    value = value.split(".");
    value = value.map(x => parseInt(x));
    if (value[1]) {
        realStars[value[0]].classList.remove('far', 'fas', 'fa-star-half-alt', 'fa-star');
        realStars[value[0]].classList.add('far', 'fa-star');
    }
}

function resetStar() {
    for (var i = 0; i < realStars.length; i++) {
        realStars[i].classList.remove("fas", "far", "fa-star-half-alt", "fa-star");
        realStars[i].classList.add("far", "fa-star");
    };
}

for (var i = 0; i < stars.length; i++) {
    stars[i].addEventListener("mouseover", fillStars);
    stars[i].addEventListener("mouseout", emptyStars);
};

starBox.addEventListener("mouseout", resetStar);