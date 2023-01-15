const buttonMen = document.querySelector('.header__button-gender_men');
const buttonWomen = document.querySelector('.header__button-gender_women');
const body = document.body;
const cardImage = document.querySelector('.card__image');
const cardText = document.querySelector('.card__text');
const buttonText = document.querySelector('.header__button-change_text');
const buttonImage = document.querySelector('.header__button-change_image');

const state = {
  gender: body.classList.contains('women') ? ('women') : ('men'),
};

const getData = () => fetch('db.json').then(response => response.json());

const getRandomArr = (arr) => {
  const randomNumber = Math.floor(Math.random() * arr.length);
  return arr[randomNumber];
};

const changePresent = () => {
  if(state.photo.includes('black')) {
    cardText.style.color = '#fff';
  } else {
    cardText.style.color = '';
  };

  cardImage.src = `img/${state.photo}`;
  cardText.innerHTML = state.text.replaceAll('\n', '<br>');
}

const getDataToCard = () => {
  getData().then(data => {
    state.text =getRandomArr(data.text[state.gender]);
    state.photo =getRandomArr(data.photo[state.gender]);
    changePresent()
  });
};

const changeToMen = () => {
  if (state.gender !== 'men') {
    body.classList.add('men');
    body.classList.remove('women');
    state.gender = 'men';
    getDataToCard();
  };
};

const changeToWomen = () => {
  if (state.gender !== 'women') {
    body.classList.add('women');
    body.classList.remove('men');
    state.gender = 'women';
    getDataToCard();
  }
};

const changeText = () => {
  getData().then(data => {
    state.text =getRandomArr(data.text[state.gender]);
    changePresent()
  });
};

const changeImage = () => {
  getData().then(data => {
    state.photo =getRandomArr(data.photo[state.gender]);
    changePresent()
  });
}

buttonMen.addEventListener('click', changeToMen);
buttonWomen.addEventListener('click', changeToWomen);
buttonText.addEventListener('click', changeText);
buttonImage.addEventListener('click', changeImage);
getDataToCard();

const cardWrapper = document.querySelector('.card__wrapper');
const downloadImg = document.querySelector('.download');

downloadImg.addEventListener('click', () => {
  const dataUrl = document.canvas.toDataURL(); 
  const a = document.createElement('a'); 
       a.href = dataUrl; 
       a.download = 'hello' + '.png'; 
       document.body.appendChild(a); 
       a.click(); 
       document.body.removeChild(a); 
});
