export default class Slider {
  constructor (element) {
    this.slider = element;
    this.slides = [...element.querySelectorAll('.js-slider-slide')];
    this.dots = [...element.querySelectorAll('.js-slider-dot')];
    this.activeIndex = 2;
  }

  init () {
    this.dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        this.slideTo(index);
        this.activeIndex = index;
      });
    });

    this.slideTo(this.activeIndex);
  }

  slideTo (position) {
    this.dots.forEach(dot => dot.classList.remove('js-slider-dot--active'));
    this.slides.forEach(slide => slide.classList.remove('js-slider-slide--active'));

    this.dots[position].classList.add('js-slider-dot--active');
    this.slides[position].classList.add('js-slider-slide--active');

    console.log(position);
  }
}

export function initSlider () {
  const slider = document.querySelector('.js-slider');
  new Slider(slider).init();
}
