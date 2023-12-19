const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let arrowLeft = document.querySelector(".arrow_left");
let arrowRight = document.querySelector(".arrow_right");
let dotsDiv = document.querySelector(".dots");
let imageContent = document.querySelector(".banner-img");
let tagLineCarousel = document.querySelector(".tagline");
let dots = document.getElementsByClassName("dot");

let slidesLength = slides.length;
let currentSlideIndex = 0;

function displayDots() {
  for (let i = 0; i < slidesLength; i++) {
    let dot = document.createElement("span");
    dot.classList.add("dot");
    dotsDiv.appendChild(dot);
  }
  dots[0].classList.add("dot_selected");
}
displayDots();

function updateDots() {
  for (let dot of dots) {
    dot.classList.remove("dot_selected");
  }
  dots[currentSlideIndex].classList.add("dot_selected");
}
function prevSlide() {
  if (currentSlideIndex > 0) {
    currentSlideIndex--;
  } else {
    currentSlideIndex = slidesLength - 1;
  }
  changeSlideAndTagLine();
  updateDots();
}

function nextSlide() {
  if (currentSlideIndex < slidesLength - 1) {
    currentSlideIndex++;
  } else {
    currentSlideIndex = 0;
  }
  changeSlideAndTagLine();
  updateDots();
}

function changeSlideAndTagLine() {
  imageContent.src =
    "./assets/images/slideshow/" + slides[currentSlideIndex].image;
  tagLineCarousel.innerHTML = slides[currentSlideIndex].tagLine;
}

arrowLeft.addEventListener("click", prevSlide);
arrowRight.addEventListener("click", nextSlide);
