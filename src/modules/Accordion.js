import { module } from 'modujs';
import LocomotiveScroll from 'locomotive-scroll';

export default class extends module {
  constructor(m) {
    super(m);
    this.events = {
      click: {
        header: 'toggleSection'
      }
    }
    this.scr = new LocomotiveScroll({
      el: this.el, // корневой элемент
      smooth: true // включаем плавный скроллинг
    });
  }

  toggleSection(e) {
    const target = e.currentTarget;
    const section = this.parent('section', target);

    this.scr.update();

    if (section.classList.contains('is-open')) {
      section.classList.remove('is-open');
    } else {
      section.classList.add('is-open');
    }
  }
}
