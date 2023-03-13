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
    this.scr = new LocomotiveScroll(); // создаем экземпляр LocomotiveScroll
  }

  toggleSection(e) {
    const target = e.currentTarget;
    const section = this.parent('section', target);
    const main = this.$('main', target);

    this.scr.update(); // вызываем метод update() для обновления Locomotive Scroll

    if (section.classList.contains('is-open')) {
      section.classList.remove('is-open');
    } else {
      section.classList.add('is-open');
    }
  }
}
