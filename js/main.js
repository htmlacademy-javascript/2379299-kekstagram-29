import {rendererThumbnail} from './renderer-thumbnail.js';
import './user-form.js';
import './scale.js';
import './slider.js';
import './avatar.js';
import {getData} from './api.js';
import {debounce, showMessage} from './util.js';
import {setDefaultsClick, setRandomClick, setDiscussedClick} from './sort.js';

let allObjects = [];
const RERENDER_DELAY = 500;

getData().then((postArray) => {
  const debouncedRender = debounce(rendererThumbnail, RERENDER_DELAY);
  rendererThumbnail(postArray);

  setDefaultsClick(postArray, debouncedRender);
  setRandomClick(postArray, debouncedRender);
  setDiscussedClick(postArray, debouncedRender);
  allObjects = postArray;
}).catch((err) => {
  showMessage(err.message);
});

export{ allObjects };
