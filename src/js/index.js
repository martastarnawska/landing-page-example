import hello from './hello/hello';
import { initSlider } from './slider/slider';
import '../scss/main.scss';

document.addEventListener('DOMContentLoaded', () => {
  console.log('script running!');
  hello();
  initSlider();
});
