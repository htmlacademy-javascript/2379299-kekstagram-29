
import {rendererThumbnail} from './renderer-thumbnail.js';
import './user-form.js';
import './scale.js';
import './slider.js';
import './avatar.js';
import {setUserFormSubmit, closeModal} from './user-form.js';
import {getData} from './api.js';
import {showMessage} from './util.js';
import { setDefaultsClick, setRandomClick, setDiscussedClick } from './sort.js';

let allObjects = [];

getData()
  .then((postArray) => {
    rendererThumbnail(postArray);
    setDefaultsClick(postArray, rendererThumbnail);
    setRandomClick(postArray, rendererThumbnail);
    setDiscussedClick(postArray, rendererThumbnail);

    allObjects = postArray;
  })
  .catch(
    (err) => {
      showMessage(err.message);
    }
  );
setUserFormSubmit(closeModal);

export{allObjects };
