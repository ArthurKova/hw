const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const mainList = document.querySelector('.gallery');
mainList.insertAdjacentHTML('beforebegin', 'insertAdjHTML');

images.map(image => {
  const listEl = document.createElement('li');
  const listImg = document.createElement('img');
  listImg.src = image.url;
  listImg.alt = image.alt;
  listImg.width = 640;
  listImg.classList = 'img';

  mainList.append(listEl, listImg);
});
