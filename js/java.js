//БУРГЕРРРРРРРрррррРР
const burger = document.querySelector('.burger');
const menuItems = document.querySelector('.navbar__menu-items');

burger.addEventListener('click', () => {
  menuItems.classList.toggle('show');
});

//SLIDERRRRrrrrrrrrrRRRRRrrrRRR
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slider__item");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}


//АККОРДЕОНННННННННННННННН
// Get the span and accordion elements
const span = document.querySelector('h2 span');
const accordion = document.querySelector('p');

// Add an event listener to the span element
span.addEventListener('click', () => {
  // Toggle the visibility of the accordion element
  accordion.classList.toggle('show');
});


//МОДАЛЬНОЕОКНООООООООООООООООООО
// Get the button and modal elements
const button = document.querySelector('.slider__button');
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.modal__close');

// Add an event listener to the button element
button.addEventListener('click', () => {
  // Toggle the visibility of the modal element
  modal.classList.toggle('modal--visible');
});

// Add an event listener to the close button element
closeButton.addEventListener('click', () => {
  // Remove the.modal--visible class from the modal element
  modal.classList.remove('modal--visible');
});

//TABYYYYYYYYYYYYYYY
const tabs = document.querySelectorAll('.tab__item');
const contents = document.querySelectorAll('.tab__pane');

tabs.forEach(tab => {
  tab.addEventListener('click', e => {
    e.preventDefault();
    const target = e.target.getAttribute('href');
    tabs.forEach(t => {
      if (t !== tab) {
        t.classList.remove('active');
      }
    });
    contents.forEach(c => {
      if (c !== document.querySelector(target)) {
        c.classList.remove('active');
      }
    });
    tab.classList.add('active');
    document.querySelector(target).classList.add('active');
    const flowers = document.querySelectorAll('.flower-list li');
    flowers.forEach(flower => {
      flower.classList.remove('active');
    });
    document.querySelectorAll(target + '.flower-list li').forEach(flower => {
      flower.classList.add('active');
    });
  });
});