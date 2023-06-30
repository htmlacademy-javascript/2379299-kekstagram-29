
const DESCRIPTION_PHOTOS = [
  'Закат на пляже',
  'Цветочное поле',
  'Горы в тумане',
  'Уютный камин',
  'Городская архитектура',
  'Рассвет над горами',
  'Природный водопад',
  'Портрет девушки',
  'Площадь с фонтаном',
  'Заснеженный пейзаж',
  'Макро съемка цветка',
  'Вид с высоты',
  'Зеленый парк',
  'Зеркальное отражение',
  'Пустынный ландшафт',
  'Архитектурный деталь',
  'Морской пейзаж',
  'Уличная фотография',
  'Разноцветные шарики',
  'Портрет старика',
  'Заброшенное здание',
  'Пляжный отдых',
  'Фотография еды',
  'Городская ночь',
  'Дикие животные в природе'
];

const NAMES = [
  'Августина',
  'Ангелина',
  'Савелий',
  'Аркадий',
  'Риенс',
  'Трисс ',
  'Лютик',
  'Геральт',
  'Йеннифэр'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomElementArray = (x) => x[getRandomInteger(0, x.length - 1)];

function getUniq(min, max){
  const previousValues = [];
  return function (){
    let currentValue = getRandomInteger(min, max);

    if (previousValues.length >= (max - min + 1)) {
      return 'NAN';
    }

    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }

    previousValues.push(currentValue);
    return currentValue;
  };
}

const generateCommentsId = getUniq(1, 10000);
const createComments = () => {
  const id = generateCommentsId();
  return {
    id: id,
    avatar:`img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: getRandomElementArray(MESSAGES),
    name:getRandomElementArray(NAMES),
  };
};

const generateObjectsId = getUniq(1, 25);
const createObjects = () => {
  const id = generateObjectsId();
  return{
    id: id,
    url:`photos/${id}.jpg`,
    description: getRandomElementArray(DESCRIPTION_PHOTOS),
    likes: getRandomInteger(1, 200),
    comments: Array.from({length:getRandomInteger(1, 30)}, createComments),
  };
};

const AllComments = Array.from({length: 25}, createObjects);
console.log(AllComments);
