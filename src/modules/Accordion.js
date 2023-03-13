
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
      this.myScrollInstance = new Scroll(document.querySelector('[data-module-scroll]'));
    }
  
    toggleSection(e) {
      const target = e.currentTarget;
      const section = this.parent('section', target);
      console.log(this.myScrollInstance);
  
      this.myScrollInstance.init();
  
      if (section.classList.contains('is-open')) {
        section.classList.remove('is-open');
      } else {
        section.classList.add('is-open');
      }
    }
  }
  