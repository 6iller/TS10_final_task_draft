import {ITours} from "../models/tours";
import {images} from "@services/img/img";


// указать возвращающий тип и тип для параметра
export function getTourTemplate(obj: ITours, i: number) {
    const tmpl = `
       <div  data-tour-item-index=${i} class="tour-block">
           <h2>${obj.name}</h2>
           <img class='tour-pic' src="./dist/${obj.img}"/>
           <div class="ticket-description">${obj.description}</div>
           <p>${obj.price}</p>
       </div>
    `
   return tmpl;
}


// из-за строка 10 путь: src="./dist/${obj.img}, поменян интерфейс ITours