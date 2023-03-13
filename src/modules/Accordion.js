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
    }
 
    toggleSection(e) {
        const target = e.currentTarget;
        const section = this.parent('section', target);
        const main = this.$('main', target);
        

 const scr = new LocomotiveScroll();
scr.update();
        if (section.classList.contains('is-open')) {
            section.classList.remove('is-open');
        } else {

            section.classList.add('is-open');

        }
    }
}