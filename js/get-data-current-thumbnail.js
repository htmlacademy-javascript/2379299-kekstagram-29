import {allObjects} from './main.js';

const getCurrentThumbnailData = (id) => allObjects.filter((element) => element.id === parseInt(id, 10));

export { getCurrentThumbnailData };
