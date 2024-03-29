"use strict";

import { removeAllClasses, bodyLock } from "./utils/functions.js";
import DismalModules, { acc } from "./utils/modules.js";

import "./unstable/formich.js";
// import Swiper, { Navigation, Autoplay, Pagination, Thumbs, EffectFade } from "swiper";
import "./unstable/burger.js";

/**
 * b_modal
 */
import "./b_modal.js";

/**
 * Timer
 */
// import "./b_timer.js";

/**
 * Lazy Load
 */
import "./libs/lazyload.min.js";
let lazyLoadInstance = new LazyLoad();
window.lazyload = lazyLoadInstance;


/**
 * Dropdown Select
 */
import "./libs/custom-select.min.js";
if (document.querySelector(".input--dropdown")) {
  customSelect(".input--dropdown .input__select");
}
import "./unstable/tabs.js";

/**
 * Smooth anchors
 */
import "./utils/smooth-anchors.js";

import "./components/carousels.js";
import { doc } from "prettier";

// Аккордеон
// const accordions = new DismalModules.Accordions()

// Модальные окна
// const modals = new DismalModules.Modals()

// Табы
// DismalModules.tabs()

// Плейсхолдер текстовых полей
// DismalModules.labelTextfield()

// Списки выбора
// DismalModules.select()

// Кнопка "Наверх"
// DismalModules.arrowUp()

// Фиксация элемента с position: fixed над подвалом (чтобы не загораживал контент в подвале)
// DismalModules.fixElemOverFooter()

// Только цифры и точка в инпутах
// DismalModules.onlyDigit()




// (function() {
//   function scrollHorizontally(e) {
//       e = window.event || e;
//       var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
//       console.log(delta)
//       document.querySelector('.catalog__gallery_slide').scrollLeft -= (delta * 40); // Multiplied by 40
//       e.preventDefault();
//   }
//   if (document.querySelector('.catalog__gallery_slide').addEventListener) {
//       // IE9, Chrome, Safari, Opera
//       document.querySelector('.catalog__gallery_slide').addEventListener('mousewheel', scrollHorizontally, false);
//       // Firefox
//       document.querySelector('.catalog__gallery_slide').addEventListener('DOMMouseScroll', scrollHorizontally, false);
//   } else {
//       // IE 6/7/8
//       document.querySelector('.catalog__gallery_slide').attachEvent('onmousewheel', scrollHorizontally);
//   }
// })();

const catalogSlide = document.querySelectorAll(".catalog-slide, .news-slide");

for (let i = 0; i < catalogSlide.length; i++) {
  catalogSlide[i].addEventListener('wheel', (event) => {
    event.preventDefault();
    console.log(event.deltaY)

    catalogSlide[i].scrollBy({
      left: event.deltaY < 0 ? -30 : 30,
    });
  });
}

let modalShareButton = document.querySelector('.modal-share__button')
modalShareButton.addEventListener("click", function() {
  let link = document.querySelector('.modal-share__input').value
  navigator.clipboard.writeText(link);
})


if(document.querySelector('.card-expand')){

  let expandBtn = document.querySelector('.card-expand')
  expandBtn.addEventListener("click", function() {
    document.querySelector('.card-list').classList.toggle('hidden');
    expandBtn.classList.toggle('hide');
    let expandBtnText = expandBtn.querySelector('p');
    if (expandBtnText.innerHTML === "Развернуть") {
      expandBtnText.innerHTML = "Свернуть";
    } else {
      expandBtnText.innerHTML = "Развернуть";
    }
  });
}