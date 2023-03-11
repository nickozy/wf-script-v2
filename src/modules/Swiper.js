import { module } from 'modujs';
import Swiper from 'swiper';

export default class extends module {
    constructor(m) {
        super(m);
    }

    init() {
        let sswiper = new Swiper('.layout', {
            direction: 'vertical',
            wrapperClass: 'layout__list',
            slideClass:  'layout__list-item'
        })
    }
}
