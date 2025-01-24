
/* Общие методы используются для вставки текста в header   footer*/

/*  -
    - Указать в методах возвращающие типы, типы для параметров, в теле функции также указать типы
*/
// Указываем типы для параметров и возвращаемого значения
export function initHeaderTitle(ticketName: string, selector: string): void {
    const headerElement: HTMLElement | null = document.querySelector('header');
    if (headerElement) {
        const targetItem: HTMLElement | null = headerElement.querySelector(selector);
        if (targetItem) {
            targetItem.innerText = ticketName;
        }
    }
}

export function initFooterTitle(ticketName: string, selector: string): void {
    const footerElement: HTMLElement | null = document.querySelector('footer');
    if (footerElement) {
        const targetItem: HTMLElement | null = footerElement.querySelector(selector);
        if (targetItem) {
            targetItem.innerText = ticketName;
        }
    }
}

