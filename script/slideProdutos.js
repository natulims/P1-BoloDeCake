var swiper = new Swiper(".slide-content-bolos", {
    slidesPerView: 10,//quantidade de cards aparentes
    spaceBetween: 5,// espaço entre os cards
    slidesPerGroup: 1, //quantos cards vão aparecer por clique
    loop: true, //se será infinito
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
// para ver as breakpoints, da responsividade por tamanho de tela e quantidade de slides.
    breakpoints:{
      0: {
        slidesPerView: 1,
        spaceBetween: 2,
      },

      480: {
        slidesPerView: 2,
      },

      720: {
        slidesPerView: 3,
      },

      1140: {
        slidesPerView: 4,
      },

      1560: {
        slidesPerView: 6,
        spaceBetween: 10,
        
      },
    }
  });

  var swiper = new Swiper(".slide-content-doces", {
    slidesPerView: 4,
    spaceBetween: 5,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
      0: {
        slidesPerView: 1,
        spaceBetween: 2,
      },

      480: {
        slidesPerView: 2,
      },

      720: {
        slidesPerView: 3,
      },

      1140: {
        slidesPerView: 4,
      },

      1560: {
        slidesPerView: 6,
        spaceBetween: 10,
        
      },
    }
  });

