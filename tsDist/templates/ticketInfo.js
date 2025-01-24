"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initTicketElementTemplate = initTicketElementTemplate;
// указать возвращающий тип
function initTicketElementTemplate(data, i) {
    var tmpl = "\n       <div  data-item-index=".concat(i, " class=\"ticket-block\">\n           <p>").concat(data, "</p>\n       </div>\n    ");
    return tmpl;
}
//# sourceMappingURL=ticketInfo.js.map