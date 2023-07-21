// Функция которая возвращает целые числа.
import {takeNumber} from './take-number.js';
// Функция которая возвращает целые числа.
import {flipOver} from './flip-over.js';
// Функция для проверки длины строки.
import {checkingLength} from './checking-length.js';
// Массив случайных обьектов с коментариями
import {allObjects} from './date.js';
// Функция которая отрисовывает миниатюры
import {rendererThumbnail} from './renderer-thumbnail.js';
// Функция которая отрисовывает большие картинки
import './object-picture.js';


import './user-form.js';
import './scale.js';
import './slider.js';

takeNumber();
flipOver('Лёша на полке клопа нашёл');
checkingLength('Строка', 1);
rendererThumbnail(allObjects);

