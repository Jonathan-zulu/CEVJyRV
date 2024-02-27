document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('#menu-button');
  const menu = document.querySelector('#menu');
  const swiperP = document.querySelector('div#swiper-principal');
  const main = document.querySelector('main');
  const footer = document.querySelector('footer');

 // Función para el menu hamburguesa
  menuButton.addEventListener('click', () => {
    if (menu.classList.contains('active')) {
      menu.classList.remove('active');
      menu.style.display = 'none';
      main.style.display = '';
      footer.style.display = '';
      swiperP.style.display = '';

    } else {
      menu.classList.add('active');
      menu.style.display = 'flex';
      main.style.display = 'none';
      footer.style.display = 'none';
      swiperP.style.display = 'none';
    }
  });

  // Función para el efecto blur en la barra de navegación al hacer scroll
  window.onscroll = function () { aplicarDesenfoque() };

  function aplicarDesenfoque() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.querySelector('header').classList.add("blur");
    } else {
      document.querySelector('header').classList.remove("blur");
    }
  }

  const conocenos = document.getElementById('conocenos');
  conocenos.style.cursor = 'pointer';
  conocenos.addEventListener('click', () => {
      window.location.href = 'quienesSomos.html';
    });

  // Funciones para los carruseles de imágenes 
  const swiper = new Swiper('.swiper1', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination1',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next1',
      prevEl: '.swiper-button-prev1',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar1',
    },
  });

  const swiper2 = new Swiper('.swiper2', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination2',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar2',
    },
  });

  const swiper3 = new Swiper('.swiper3', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination3',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next3',
      prevEl: '.swiper-button-prev3',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar3',
    },
  });
});
