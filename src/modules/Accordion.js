import { module } from 'modujs';
import Scroll from './Scroll';

export default class extends module {
  constructor(m) {
    super(m);
    this.events = {
      click: {
        header: 'toggleSection'
      }
    }
    const myScrollInstance = new Scroll(document.querySelector('.js-my-scroll'));
  }

  toggleSection(e) {
    const target = e.currentTarget;
    const section = this.parent('section', target);
    console.log(Scroll)

    myScrollInstance.update();

    if (section.classList.contains('is-open')) {
      section.classList.remove('is-open');
    } else {
      section.classList.add('is-open');
    }
  }
}

