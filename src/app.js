import Swiper from "swiper";

import { Navigation, Pagination } from "swiper/modules";
/*import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";*/
import "swiper/swiper-bundle.css";

const swiper = new Swiper(".swiper", {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 24,
    slidesPerGroup: 1,
    loop: true,
    centeredSlides: false,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: "bullets",
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
    },
});

const infoBtn = document.querySelector(".info-btn");
const ingredientsList = document.getElementById("ingredientsList");

infoBtn.addEventListener("click", () => {
    ingredientsList.classList.toggle("hidden");
});
