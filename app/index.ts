import {getTours} from "@rest/tours"; // получает данные о турах с сервера путем импорта функции getTours
import './assets/styles/main.scss'; // получает данные о стилях путем импорта локального файла
import {images} from "@services/img/img"; // импортирует объект images из указанного пути, объект содержит ссылки на изображения (требуется действие).
import {ITours} from "./models/tours"; // импортирует интерфейс itours из указанного пути (требуется действие, там пусто)
import {getTourTemplate} from "./templates/tours"; // импортирует функцию getTourTemplate, которая генерирует разметку html для туров (поставить точку в пути картинки, требуется действие)
import {openModal} from "@services/modal/modalService"; // импортирует функцию openModal из указанного пути, которая открывает модальное окно (требуется действие)
import {initFooterTitle, initHeaderTitle} from "@services/general/general"; // импортирует функции initFooterTitle и initHeaderTitle из указанного пути, которые инициализируют заголовки в хедере и футере (требуется действие)
import {initToursDivElements} from "./services/tickets/ticket";
import {initTourElemListener} from "./services/tickets/ticket";
import {getTicketById} from './services/rest/tickets';

export let  toursDataArray: ITours[] = []; // объявляет глобальную переменную, которая будет содержать информацию о турах
const imagesStore = images; // ссылка на изображения нужна чтобы webpack формировал изображения в папке dist. ссылается на объект images ?в функции getTourTemplate



initHeaderTitle('Туры', 'h1'); // инициализирует заголовок хедера с текстом туры и тегом h1
initFooterTitle('Туры по всему миру', 'h2'); // инициализирует заголовок футера с текстом туры и тегом h2
// init data
const tourData: Promise<ITours[]> = getTours(); // создает переменную, куда записывает промис массива данных о турах с сервера

// если промис tourData выполняется, то вызывается функция обработчик, аргумент функции - массив данных о турах
tourData.then((data): void => {
  console.log('call ')
  toursDataArray = data;
  initToursDivElements(data);
});




/*  - перенести все методы ниже в раздел services (сюда импортировать и вызывать)
-   создать метод initApp который будет здесь вызываться, в теле метода добавить эти имортированные методы
    - Указать в методах возвращающие типы, типы для параметров, в теле функции также указать типы чтобы не было ошибок
*/

// 1. проверяет, является ли переданный массив data массивом 2. получает корневой элемент приложения main-app 3. создает div для обертки элементов тура 4. добавляет класс tour-wrap к элементу обертки
// 5. инициализирует прослушиватель событий для элементов туров 6. инициализирует переменную rootElementData, которая будет содержать разметку html для элементов туров
// 7. перебирает массив данных о турах и для каждого элемента генерирует html разметку с помощью импортированной функции getTourTemplate 8. устанавливает html разметку для элементов обертки
// 9. добавляет элемент обертки в корневой элемент приложения
// function initToursDivElements(data) {

//   if (Array.isArray(data)) {
//     const rootElement: Element = document.querySelector('.main-app');
//     const tourWrap = document.createElement('div');

//     tourWrap.classList.add('tour-wrap');

//     // init click for modal
//     initTourElemListener(tourWrap);

//     let rootElementData = '';
//     data.forEach((el, i) => {
//       rootElementData += getTourTemplate(el, i);
//     });

//     tourWrap.innerHTML = rootElementData;
//     rootElement.appendChild(tourWrap) ;
//   }
// }

// 1. добавляет прослушиватель событий click к элементу обертки 2. получает элемент, по которому произошел клик 3. получает родительский элемент элемента, по которому произошел клик
// 4. записывает переменную realTarget, которая будет хранить реальный элемент тура, по которому произошел клик 5. проверяет, имеет ли элемент, по которому произошел клик, аттрибут data-tour-item-index)
// 6. если этот аттрибут присутствует, то реальный элемент тура = элемент, по которому произошел клик 7. проверяет, имеет ли родительский элемент тот же аттрибут
// 8. если да, то родительский элемент назначается в качестве реального элемента тура 9. если реальный элемент тура найден, то в переменную извлекается индекс тура из того аттрибута и команда openModal открывает модальное окно
// function initTourElemListener(tourWrap) {
//   tourWrap.addEventListener('click', (ev) => {
//     const targetItem = ev.target as HTMLElement;
//     const parentItem = targetItem?.parentNode as HTMLElement;
//     let realTarget;

//     if (targetItem.hasAttribute('data-tour-item-index')) {
//       realTarget = targetItem;
//     } else if (parentItem && parentItem.hasAttribute('data-tour-item-index')) {
//       realTarget = parentItem;
//     }

//     if (realTarget) {
//       const dataIndex = realTarget.getAttribute('data-tour-item-index');
//       openModal('order', Number(dataIndex));
//     }
//   });
// }

// init app
function initApp(data: ITours[]): void {
  initToursDivElements(data); // Вызываем функцию для инициализации элементов туров
};

// Если промис tourData выполняется, то вызывается функция обработчик, аргумент функции - массив данных о турах
tourData.then((data): void => {
    console.log('call ');
    toursDataArray = data;
    initApp(data); // Вызываем метод initApp с данными туров
});

