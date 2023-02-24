let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


// add active class to header when window got scrolled
window.addEventListener('scroll', ()=>{
  header.classList.toggle('active', window.scrollY > 0);
});

// add active class to navbar when menu got clicked
menu.onclick = () => {
  navbar.classList.toggle('active');
}

window.onscroll = () => {
  navbar.classList.remove('active');
}


var slides = document.querySelectorAll('.slide');
    var btns = document.querySelectorAll('.img-slider-btn');
    let currentSlide = 1;

    // JS for image slider manual navigation
    var manualNav = (manual) => {
      slides.forEach((slide) => {
        slide.classList.remove('active');

        btns.forEach((btn) => {
          btn.classList.remove('active');
        });
      });

      slides[manual].classList.add('active');
      btns[manual].classList.add('active');
    }

    btns.forEach((btn, i) => {
      btn.addEventListener('click', () => {
        manualNav(i);
        currentSlide = i;
      });
    });

    // JS for image slider for autoplay navigation
    var repeat = (activeClass) => {
      let active = document.getElementsByClassName('active')
      let i = 1;

      var repeater = () => {
        setTimeout(() => {
          [...active].forEach((activeSlide) => {
            activeSlide.classList.remove('active');
          })
          slides[i].classList.add('active');
          btns[i].classList.add('active');
          i++;

          if(slides.length == i)
          {
            i = 0;
          }
          if(i >= slides.length)
          {
            return;
          }
          repeater();
        }, 10000);
      };
      repeater();
    };
    repeat();
