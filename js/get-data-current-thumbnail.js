import {allObjects} from './main.js';


// Функция которая получает данные
const getDataСurrentThumbnail = (id)=>{
  const currentIdThumbnail = allObjects.filter((element) => element.id === parseInt(id, 10));
  return currentIdThumbnail;
};


export{getDataСurrentThumbnail};
