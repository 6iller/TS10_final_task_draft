"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tickets_1 = require("@rest/tickets");
require("@myCss"); // добавлена новая ссылка - ссылка ведет на один файл
require("@assets/styles/tickets.scss");
var general_1 = require("@services/general/general");
var ticket_1 = require("@services/tickets/ticket");
var ticketInstance;
var ticketPostInstance;
var clientType = "custom";
// init main  data
initApp();
(0, ticket_1.registerConfirmButton)();
function initApp() {
    var ticketData = (0, tickets_1.getTicketById)('someId');
    ticketData.then(function (data) {
        ticketInstance = data[0];
        var ticketName = typeof (ticketInstance === null || ticketInstance === void 0 ? void 0 : ticketInstance.name) === "string" ? ticketInstance === null || ticketInstance === void 0 ? void 0 : ticketInstance.name : '';
        (0, general_1.initHeaderTitle)(ticketName, 'h3');
        (0, general_1.initFooterTitle)('Туры по всему миру', 'h2');
        (0, ticket_1.initTicketInfo)(ticketInstance);
    });
}
/*  - перенести все методы ниже в раздел services (сюда импортировать и вызывать)
    - Указать в методах возвращающие типы, в теле функции также указать типы чтобы не было ошибок
*/
// function initTicketInfo(ticket: TicketType | IVipTicket) {
//     const targetElement = document.querySelector('.ticket-info');
//
//     const ticketDescription = ticket?.description;
//     const ticketOperator = ticket?.tourOperator;
//     let vipClientType;
//     if ("vipStatus" in ticket) {
//         vipClientType = ticket.vipStatus;
//     }
//
//
//     const ticketElemsArr: [string, string, string] = [ticketDescription, ticketOperator, vipClientType];
//     let ticketElemTemplate;
//
//     ticketElemsArr.forEach((el, i) => {
//         ticketElemTemplate+= initTicketElementTemplate(el, i);
//     });
//
//     targetElement.innerHTML = ticketElemTemplate;
//
// }
//
// function initUserData() {
// const userInfo = document.querySelectorAll('.user-info > p');
// let userInfoObj;
//     userInfo.forEach((el) => {
//     const inputDataName = el.getAttribute('data-name');
//     if (inputDataName) {
//         const inputElems = el.querySelector('input');
//         userInfoObj[inputDataName] = inputElems.value;
//     }
//     });
//
//     console.log('userInfoObj',userInfoObj)
//     return userInfoObj;
// }
//
// function initPostData(data) {
//     initUserData();
//     postTicketData(data).then((data) => {
//         if (data.success) {
//
//         }
//     })
// }
//
// function registerConfirmButton(): void {
//     const targetEl = document.getElementById('accept-order-button');
//     if (targetEl) {
//         targetEl.addEventListener('click', () => {
//             initPostData(ticketPostInstance);
//         });
//     }
// }
//# sourceMappingURL=tickets.js.map