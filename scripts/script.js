const buttonMen = document.querySelector('.header__button-gender_men');
const buttonWomen = document.querySelector('.header__button-gender_women');
const body = document.body;

const state = {
  gender: body.classList.contains('woman') ? ('women') : ('men'),
}

const changeToMen = () => {
  if (state.gender !== 'men') {
    body.classList.add('men');
    body.classList.remove('women');
    state.gender = 'men';
  }
}
const changeToWomen = () => {
  if (state.gender !== 'women')
  body.classList.add('women');
  body.classList.remove('men');
  state.gender = 'women';
}

buttonMen.addEventListener('click', changeToMen);
buttonWomen.addEventListener('click', changeToWomen);