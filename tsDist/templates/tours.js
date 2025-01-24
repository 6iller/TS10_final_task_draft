"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTourTemplate = getTourTemplate;
// указать возвращающий тип и тип для параметра
function getTourTemplate(obj, i) {
    var tmpl = "\n       <div  data-tour-item-index=".concat(i, " class=\"tour-block\">\n           <h2>").concat(obj.name, "</h2>\n           <img class='tour-pic' src=\"./dist/").concat(obj.img, "\"/>\n           <div class=\"ticket-description\">").concat(obj.description, "</div>\n           <p>").concat(obj.price, "</p>\n       </div>\n    ");
    return tmpl;
}
// из-за строка 10 путь: src="./dist/${obj.img}, поменян интерфейс ITours
//# sourceMappingURL=tours.js.map