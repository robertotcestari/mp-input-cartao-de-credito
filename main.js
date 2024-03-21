import './style.css';

function formatCardNumber(string) {
  const sanitizedString = string.replace(/[^0-9]/g, '');
  if (sanitizedString) {
    const fourNumbers = sanitizedString.match(/.{1,4}/g);
    return fourNumbers.join(' ');
  }

  return '';
}

// Form Items
const ccNumberInput = document.querySelector('#cc-number');
const ccNameInput = document.querySelector('#cc-name');
const ccExpMonth = document.querySelector('#cc-exp-month');
const ccExpYear = document.querySelector('#cc-exp-year');
const ccCVV = document.querySelector('#cc-cvv');

// Card Items
const backCard = document.querySelector('.back-card');
const frontCard = document.querySelector('.front-card');

const cardNumber = document.querySelector('.card-number');
const cardName = document.querySelector('.card-name');
const cardExpMonth = document.querySelector('.card-exp-month');
const cardExpYear = document.querySelector('.card-exp-year');
const cardCVV = document.querySelector('.card-cvv');

ccNumberInput.addEventListener('input', (e) => {
  const numberResult = formatCardNumber(ccNumberInput.value);

  ccNumberInput.value = numberResult;
  cardNumber.textContent = numberResult || '#### #### #### ####';
});

ccNameInput.addEventListener('input', (e) => {
  cardName.textContent = ccNameInput.value || 'Seu Nome';
});

ccExpMonth.addEventListener('input', (e) => {
  cardExpMonth.textContent = ccExpMonth.value || 'mm';
});

ccExpYear.addEventListener('input', (e) => {
  cardExpYear.textContent = ccExpYear.value || 'aa';
});

ccCVV.addEventListener('input', (e) => {
  cardCVV.textContent = ccCVV.value || '###';
});

ccCVV.addEventListener('focus', () => {
  frontCard.classList.remove('flip-card-2', 'flip-card');
  backCard.classList.remove('flip-card-2', 'flip-card');

  frontCard.classList.add('flip-card');

  setTimeout(() => {
    frontCard.classList.remove('flip-card');
    frontCard.style = 'display:none';
    backCard.style = 'display:flex';
    backCard.classList.add('flip-card-2');
  }, 250);
});

ccCVV.addEventListener('blur', () => {
  frontCard.classList.remove('flip-card-2', 'flip-card');
  backCard.classList.remove('flip-card-2', 'flip-card');


  backCard.classList.add('flip-card');

  setTimeout(() => {
    backCard.classList.remove('flip-card');
    backCard.style = 'display:none';
    frontCard.style = 'display:flex';
    frontCard.classList.add('flip-card-2');
  }, 250);
});
