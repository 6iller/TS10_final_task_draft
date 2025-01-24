import { ITours } from "../../models/tours"

// запрос на получение списка туров - Определить типы (возвращающие и для параметров)
export async function getTours(): Promise<ITours[]> {
    const response = await fetch('https://62b9e756ff109cd1dc9dae16.mockapi.io/apiv/v1/tours/');
    if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
    }
    return await response.json();
}