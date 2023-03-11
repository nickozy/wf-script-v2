import { module } from 'modujs';
import Swiper from 'swiper';


export default class extends module {
    constructor(m) {
        super(m);
    }

    init(){
        const sswiper = new Swiper('.layout', {
        speed: 200,
        wrapperClass: 'layout__list',
        slideClass:  'layout__list-item'
    })
    
    sswiper()
    

}
        
}
