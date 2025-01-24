"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.openModal = openModal;
var modal_1 = require("../../classess/modal");
var index_1 = require("../../index"); // ссылка на массив с данными
// Задание: Определить типы для метода (возвращающие и для переменных в теле функции)
function openModal(type, i) {
    var data = index_1.toursDataArray[i];
    // Проверка на существование элемента в массиве и его соответствие типу ITours
    if (data && typeof data === 'object' && 'id' in data && 'name' in data && 'description' in data) {
        var tourId = data.id; // Теперь id имеет тип string
        switch (type) {
            case "order":
                var modalTemplate = "\n                    <div>\n                        <p data-moda-id=\"tour-modal\" class=\"close-modal\">x</p>\n                        <p>".concat(data.name, "</p>\n                        <p>").concat(data.description, "</p>\n                        <div data-tour-id=\"").concat(tourId, "\" class=\"ticket-submit\">\n                            <a href=\"/ticket.html?tourId=").concat(tourId, "\">\u041A\u0443\u043F\u0438\u0442\u044C \u0431\u0438\u043B\u0435\u0442</a>\n                        </div>\n                    </div>\n                ");
                var modal = new modal_1.Modal('tour-modal'); // Указываем тип Modal
                modal.open(modalTemplate);
                break;
        }
    }
    else {
        console.error("Ошибка: неверные данные тура или индекс за пределами массива");
    }
}
//# sourceMappingURL=modalService.js.map