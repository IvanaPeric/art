const sliderContent = [
  {
    id: 1,
    content: "Olje na platno 77 × 99 cm",
    img: "../public/images/tina/_KKF3717-Edit.jpg",
    title: "Slavic Fusion",
    year: "2021",
  },
  {
    id: 2,
    content: "akril, olje na platnu 140 cm x 120 cm",
    img: "../public/images/tina/PREDOGLED_Post-Tenebras-Lux_2020_TinaDobrajc_210x275cm 1.svg",
    title: "Sašo Vrabič - Ekran nad skrinjo",
    year: "2018",
  },
];

const swiperWrapper = document.querySelector(".swiper-wrapper");
const slides = document.querySelectorAll(".swiper-slide");
const yearSwiper = document.querySelector(".swiper-year");
const contentSwiper = document.querySelector(".content-swiper");
const titleSwiper = document.querySelector(".title-swiper");
const swipperNext = document.querySelector(".swiper-button-next");
const swipperPrev = document.querySelector(".swiper-button-prev");

let i = 0;

const updateContent = (i) => {
  contentSwiper.innerText = sliderContent[i % sliderContent.length].content;
  titleSwiper.innerText = sliderContent[i % sliderContent.length].title;
  yearSwiper.innerText = sliderContent[i % sliderContent.length].year;
};

sliderContent.forEach((slide, index) => {
  const div = document.createElement("div");
  div.classList.add("swiper-slide");
  div.innerHTML = `    
        <img
          class="w-full swiper-img"
          src="${slide.img}"
          alt="/"
        />
    `;
  swiperWrapper.appendChild(div);
});

contentSwiper.innerText = sliderContent[i].content;
swipperNext.addEventListener("click", (e) => {
  e.preventDefault();
  if (i < sliderContent.length) i = 0;
  i++;
  updateContent(i % sliderContent.length);
});

swipperPrev.addEventListener("click", (e) => {
  e.preventDefault();
  if (i > 0) i = sliderContent.length - 1;
  i--;
  updateContent(i % sliderContent.length);
});
