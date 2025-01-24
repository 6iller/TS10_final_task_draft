import {ITours} from "../../models/tours";
import {getTourTemplate} from "templates/tours";
import {openModal} from "@services/modal/modalService";
import {postTicketData} from "@rest/tickets";
import {IVipTicket, TicketType} from "../../models/ticket/ticket";
import {initTicketElementTemplate} from "../../templates/ticketInfo";
import {ticketPostInstance} from "./../../pages/tickets/tickets";

export function initToursDivElements(data: ITours[]): void {
    if (Array.isArray(data)) {
        const rootElement: Element | null = document.querySelector('.main-app');
        const tourWrap = document.createElement('div');

        tourWrap.classList.add('tour-wrap');

        // init click for modal
        initTourElemListener(tourWrap);

        let rootElementData = '';
        data.forEach((el, i) => {
            rootElementData += getTourTemplate(el, i);
        });

        tourWrap.innerHTML = rootElementData;
        if (rootElement) {
            rootElement.appendChild(tourWrap);
        }
    }
}

export function initTourElemListener(tourWrap: HTMLElement): void {
    tourWrap.addEventListener('click', (ev: MouseEvent) => {
        const targetItem = ev.target as HTMLElement;
        const parentItem = targetItem?.parentNode as HTMLElement;
        let realTarget: HTMLElement | null = null;

        if (targetItem.hasAttribute('data-tour-item-index')) {
            realTarget = targetItem;
        } else if (parentItem && parentItem.hasAttribute('data-tour-item-index')) {
            realTarget = parentItem;
        }

        if (realTarget) {
            const dataIndex = realTarget.getAttribute('data-tour-item-index');
            if (dataIndex) {
                openModal('order', Number(dataIndex));
            }
        }
    });
}
//{initTicketInfo, initUserData, initPostData, registerConfirmButton}

export function initTicketInfo(ticket: TicketType | IVipTicket): void {
    const targetElement = document.querySelector('.ticket-info') as HTMLElement;

    const ticketDescription = ticket?.description;
    const ticketOperator = ticket?.tourOperator;
    let vipClientType;
    if ("vipStatus" in ticket) {
        vipClientType = ticket.vipStatus;
    }


    const ticketElemsArr: [string, string, string] = [ticketDescription, ticketOperator, vipClientType];
    let ticketElemTemplate;

    ticketElemsArr.forEach((el, i) => {
        ticketElemTemplate += initTicketElementTemplate(el, i);
    });

    targetElement.innerHTML = ticketElemTemplate;

}

export function initUserData() {
const userInfo = document.querySelectorAll('.user-info > p');
let userInfoObj;
    userInfo.forEach((el) => {
    const inputDataName = el.getAttribute('data-name');
    if (inputDataName) {
        const inputElems = el.querySelector('input');
        userInfoObj[inputDataName] = inputElems.value;
    }
    });

    console.log('userInfoObj',userInfoObj)
    return userInfoObj;
}
export function initPostData(data) {
    initUserData();
    postTicketData(data).then((data) => {
        if (data.success) {

        }
    })
}
export function registerConfirmButton(): void {
    const targetEl = document.getElementById('accept-order-button');
    if (targetEl) {
        targetEl.addEventListener('click', () => {
            initPostData(ticketPostInstance);
        });
    }
}
