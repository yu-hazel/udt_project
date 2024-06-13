var swiper = new Swiper(".mySwiper", {
      slidesPerView: 5,
      spaceBetween: 10,
      loop: true,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        767: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
      },
      navigation: {
        nextEl: ".coachSlider .swiper-button-next",
        prevEl: ".coachSlider .swiper-button-prev",
      },
    });