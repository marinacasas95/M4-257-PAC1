import Swiper from "swiper";

import { Navigation, Pagination } from "swiper/modules";
//import "swiper/css";

//import "swiper/css";
//import "swiper/css/navigation";
//import "swiper/css/pagination";

const swiper = new Swiper(".swiper", {
    modules: [Navigation, Pagination],
    /*slidesPerView: 3,
    spaceBetween: 0,
    slidesPerGroup: 1,*/
    loop: true,
    centeredSlides: true,
    /*effect: "cards",
    cardsEffect: {
        // ...
    },*/
    /*navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },*/
    /*pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: "bullets",
    },*/
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    },
});
