import { module } from 'modujs';
import Swiper from "swiper";

function lau(){
    if(window.innerWidth < 992){
        const layutSwiper = new Swiper('.layout', {
            speed: 200,
            slideClass:  'layout__list-item',
            wrapperClass: 'layout__list'
        })
    }

}

export default class extends module {
    constructor(m) {
        super(m);
    }
    lau()
}
