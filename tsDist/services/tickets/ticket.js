"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initToursDivElements = initToursDivElements;
exports.initTourElemListener = initTourElemListener;
exports.initTicketInfo = initTicketInfo;
exports.initUserData = initUserData;
exports.initPostData = initPostData;
exports.registerConfirmButton = registerConfirmButton;
var tours_1 = require("templates/tours");
var modalService_1 = require("@services/modal/modalService");
var tickets_1 = require("@rest/tickets");
var ticketInfo_1 = require("../../templates/ticketInfo");
var tickets_2 = require("./../../pages/tickets/tickets");
function initToursDivElements(data) {
    if (Array.isArray(data)) {
        var rootElement = document.querySelector('.main-app');
        var tourWrap = document.createElement('div');
        tourWrap.classList.add('tour-wrap');
        // init click for modal
        initTourElemListener(tourWrap);
        var rootElementData_1 = '';
        data.forEach(function (el, i) {
            rootElementData_1 += (0, tours_1.getTourTemplate)(el, i);
        });
        tourWrap.innerHTML = rootElementData_1;
        if (rootElement) {
            rootElement.appendChild(tourWrap);
        }
    }
}
function initTourElemListener(tourWrap) {
    tourWrap.addEventListener('click', function (ev) {
        var targetItem = ev.target;
        var parentItem = targetItem === null || targetItem === void 0 ? void 0 : targetItem.parentNode;
        var realTarget = null;
        if (targetItem.hasAttribute('data-tour-item-index')) {
            realTarget = targetItem;
        }
        else if (parentItem && parentItem.hasAttribute('data-tour-item-index')) {
            realTarget = parentItem;
        }
        if (realTarget) {
            var dataIndex = realTarget.getAttribute('data-tour-item-index');
            if (dataIndex) {
                (0, modalService_1.openModal)('order', Number(dataIndex));
            }
        }
    });
}
//{initTicketInfo, initUserData, initPostData, registerConfirmButton}
function initTicketInfo(ticket) {
    var targetElement = document.querySelector('.ticket-info');
    var ticketDescription = ticket === null || ticket === void 0 ? void 0 : ticket.description;
    var ticketOperator = ticket === null || ticket === void 0 ? void 0 : ticket.tourOperator;
    var vipClientType;
    if ("vipStatus" in ticket) {
        vipClientType = ticket.vipStatus;
    }
    var ticketElemsArr = [ticketDescription, ticketOperator, vipClientType];
    var ticketElemTemplate;
    ticketElemsArr.forEach(function (el, i) {
        ticketElemTemplate += (0, ticketInfo_1.initTicketElementTemplate)(el, i);
    });
    targetElement.innerHTML = ticketElemTemplate;
}
function initUserData() {
    var userInfo = document.querySelectorAll('.user-info > p');
    var userInfoObj;
    userInfo.forEach(function (el) {
        var inputDataName = el.getAttribute('data-name');
        if (inputDataName) {
            var inputElems = el.querySelector('input');
            userInfoObj[inputDataName] = inputElems.value;
        }
    });
    console.log('userInfoObj', userInfoObj);
    return userInfoObj;
}
function initPostData(data) {
    initUserData();
    (0, tickets_1.postTicketData)(data).then(function (data) {
        if (data.success) {
        }
    });
}
function registerConfirmButton() {
    var targetEl = document.getElementById('accept-order-button');
    if (targetEl) {
        targetEl.addEventListener('click', function () {
            initPostData(tickets_2.ticketPostInstance);
        });
    }
}
//# sourceMappingURL=ticket.js.map