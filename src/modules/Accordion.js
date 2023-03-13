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
 
    init(){

        this.scroll = new LocomotiveScroll();
    }
 
    toggleSection(e) {
        const target = e.currentTarget;
        const section = this.parent('section', target);
        const main = this.$('main', target);
        


        if (section.classList.contains('is-open')) {
            section.classList.remove('is-open');
        } else {

            section.classList.add('is-open');

        }
    }
}