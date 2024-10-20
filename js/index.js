document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("burger").addEventListener("click", function () {
    document.querySelector(".header").classList.toggle("open")
  })
})

// Закрыть меню при нажатии на Esc
window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    // Действие при клике
    document.querySelector(".header").classList.remove("open")
  }
});

// Закрыть меню при клике вне его
document.getElementById("menu").addEventListener('click', event => {
  event._isClickWithInMenu = true;
});
document.getElementById("burger").addEventListener('click', event => {
  event._isClickWithInMenu = true;
});
document.body.addEventListener('click', event => {
  if (event._isClickWithInMenu) return;
  // Действие при клике
  document.querySelector(".header").classList.remove("open")
});



// Плавное перемещение
const anchors = document.querySelectorAll('[data-nav]');
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const blockID = anchor.getAttribute('href').substr(1)
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: ('center')
    })
  })
}




// валидация

let validate = new JustValidate('#form', {
  errorLabelStyle: {
    color: '#FF5C00'
  }
});

// имя
validate
  .addField('#name', [{
      rule: 'required',
      errorMessage: 'Вы не ввели имя'
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Минимум два символа'
    }
  ])

// фамилия
validate
  .addField('#nameLast', [{
    rule: 'required',
    errorMessage: 'Вы не ввели фамилию'
  }])


  // почта

  .addField('#email', [{
      rule: 'required',
      errorMessage: 'Вы не ввели e-mail'
    },

    {
      rule: 'email',
      errorMessage: 'Ошибка ввода e-mail'
    },


  ])
// код
validate
  .addField('#code', [{
      rule: 'required',
      errorMessage: 'Вы не ввели POSTAL CODE'
    },
    {
      rule: 'minLength',
      value: 5,
      errorMessage: 'Минимум три цифры'
    }
  ])

  .onSuccess('#form');


// слайдер

let swiper = new Swiper(".news__mySwiper", {
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

pagination: {
  el: ".swiper-pagination",
  clickable: true,
},

  mousewheel: true,
  keyboard: true,
});


// pagination: {
//   el: ".swiper-pagination",
//   clickable: true,
// },
