"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTours = getTours;
var tslib_1 = require("tslib");
// запрос на получение списка туров - Определить типы (возвращающие и для параметров)
function getTours() {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var response;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('https://62b9e756ff109cd1dc9dae16.mockapi.io/apiv/v1/tours/')];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("\u041E\u0448\u0438\u0431\u043A\u0430 HTTP: ".concat(response.status));
                    }
                    return [4 /*yield*/, response.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
//# sourceMappingURL=tours.js.map