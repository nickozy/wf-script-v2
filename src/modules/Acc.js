import { module } from 'modujs';
 
export default class extends module {
    constructor(m) {
        super(m);
 
        this.events = {
            click: {
                header: 'toggleSection'
            }
        }
    }
 
    init() {

        if (this.data('open')) {
            this.$('.faq__list')[0].classList.add('is-open');
        }
        
    }
 
    toggleSection(e) {
        const target = e.currentTarget;
        const section = this.parent('section', target);
        const main = this.$('main', target);
        
        if (section.classList.contains('is-open')) {
            section.classList.remove('is-open');
        } else {
            this.$('section.is-open').classList.remove('is-open');
            section.classList.add('is-open');
            this.call('scrollto', section, 'scroll', 'main');
        }
    }
}