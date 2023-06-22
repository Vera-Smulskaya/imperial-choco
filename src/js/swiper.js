new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true,
  }, 
        slidesPerView: 'auto',
        grabCursor: true,
        spaceBetween: 16,
        breakpoints: {
          1200: {
            spaceBetween: 28,
          }
        }
    });