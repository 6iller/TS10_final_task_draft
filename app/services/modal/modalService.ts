import {Modal} from "../../classess/modal";
import {toursDataArray} from "../../index"; // ссылка на массив с данными
import { ITours } from "../../models/tours"; 


// Задание: Определить типы для метода (возвращающие и для переменных в теле функции)
export function openModal(type: string, i: number): void {
    const data = toursDataArray[i];

    // Проверка на существование элемента в массиве и его соответствие типу ITours
    if (data && typeof data === 'object' && 'id' in data && 'name' in data && 'description' in data) {
        const tourId: string = data.id; // Теперь id имеет тип string
        switch (type) {
            case "order":
                const modalTemplate: string = `
                    <div>
                        <p data-moda-id="tour-modal" class="close-modal">x</p>
                        <p>${data.name}</p>
                        <p>${data.description}</p>
                        <div data-tour-id="${tourId}" class="ticket-submit">
                            <a href="/ticket.html?tourId=${tourId}">Купить билет</a>
                        </div>
                    </div>
                `;
                const modal: Modal = new Modal('tour-modal'); // Указываем тип Modal
                modal.open(modalTemplate);
                break;
        }
    } else {
        console.error("Ошибка: неверные данные тура или индекс за пределами массива");
    }
