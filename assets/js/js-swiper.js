import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

Swiper.use([Navigation, Pagination]);

var swiperBackImg = new Swiper(".swiperBackImg", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1440: {
      slidesPerView: 3,
    },
  },
});

var swiperCategoriesCategory = new Swiper(".swiperCategoriesCategory", {
  slidesPerView: 3.5,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 5,
    },
    1440: {
      slidesPerView: 9,
    },
  },
});

var swiperProducts = new Swiper(".swiperProducts", {
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
    },
    1440: {
      slidesPerView: 4,
    },
  },
});

var swiperNewProd = new Swiper(".swiperNewProd", {
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 3.5,
    },
    1440: {
      slidesPerView: 4,
    },
  },
});

var swiperDiscount = new Swiper(".swiperDiscount", {
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 3.5,
    },
    1440: {
      slidesPerView: 4,
    },
  },
});

var swiperNews = new Swiper(".swiperNews", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1440: {
      slidesPerView: 3,
    },
  },
});