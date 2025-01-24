"use strict";
/* Общие методы используются для вставки текста в header   footer*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.initHeaderTitle = initHeaderTitle;
exports.initFooterTitle = initFooterTitle;
/*  -
    - Указать в методах возвращающие типы, типы для параметров, в теле функции также указать типы
*/
// Указываем типы для параметров и возвращаемого значения
function initHeaderTitle(ticketName, selector) {
    var headerElement = document.querySelector('header');
    if (headerElement) {
        var targetItem = headerElement.querySelector(selector);
        if (targetItem) {
            targetItem.innerText = ticketName;
        }
    }
}
function initFooterTitle(ticketName, selector) {
    var footerElement = document.querySelector('footer');
    if (footerElement) {
        var targetItem = footerElement.querySelector(selector);
        if (targetItem) {
            targetItem.innerText = ticketName;
        }
    }
}
//# sourceMappingURL=general.js.map