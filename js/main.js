// Функция которая отрисовывает миниатюры
import {rendererThumbnail} from './renderer-thumbnail.js';

// Функция которая отрисовывает большие картинки
import './object-picture.js';
import './user-form.js';
import './scale.js';
import './slider.js';

import {setUserFormSubmit, closeModal} from './user-form.js';
import {getData} from './api.js';

let allObjects = [];
export{allObjects };

import {showMessage} from './util.js';
import { setCoatClick, setEyesClick } from './sort.js';

getData()
  .then((postArray) => {
    rendererThumbnail(postArray);
    allObjects = postArray;
    setEyesClick(postArray, rendererThumbnail);
    setCoatClick(postArray, rendererThumbnail);
  })
  .catch(
    (err) => {
      showMessage(err.message);
    }
  );
setUserFormSubmit(closeModal);
