'use strict';

const btnTel = document.querySelector(`.btn-tel`);
const btnNumber = document.querySelector(`.btn-number`);
const winnerFeedback = document.querySelector('.winner-feedback');
const loserFeedback = document.querySelector('.loser-feedback');
const btnClose = document.querySelectorAll('.btn-close');
const tel = document.querySelector('#tel');
const number = document.querySelector('#number');
const labelTel = document.querySelector('.label1');
const titleTel = document.querySelector('.tel-h2');
const funFact = document.querySelector('.fun-fact');
const form = document.querySelector('form');

btnTel.addEventListener('click', function (e) {
  e.preventDefault(e);
  const valid = /^\d{11}$/;

  //validate number
  if (tel.value.match(valid)) {
    //store number
    const number = tel.value;
    console.log(number);
    titleTel.textContent = number;
    //hide number form
    labelTel.classList.add('feedback-hidden');
    console.log(formTel);
  } else {
    alert('Please enter a valid phone number');
  }
  //clear input fields
  tel.value = '';
});

btnNumber.addEventListener('click', function (e) {
  e.preventDefault();
  const code = number.value;
  //clear input field
  number.value = '';
  // if (tel.value != number) {
  //   alert(`Please enter your number first`);
  // } else {
  //validate code
  if (code != 1111) {
    //if not valid
    //display loser message
    loserFeedback.classList.remove('feedback-hidden');
    loserFeedback.classList.add('feedback-display');

    //add random  fun fact
    const factRandom = async function () {
      try {
        const res = await fetch(
          'https://uselessfacts.jsph.pl/random.json?language=en'
        );
        if (!res.ok)
          throw new Error(`Couldn't generate random fact. ${err.message}`);

        const data = await res.json();
        console.log(data.text);
        funFact.textContent = data.text;
      } catch (err) {
        console.log(err);
      }
    };

    factRandom();
  } else {
    //if valid
    //display winner message
    winnerFeedback.classList.remove('feedback-hidden');
    winnerFeedback.classList.add('feedback-display');
  }
  //add redemption message

  //delete winning code from data bank
});

btnClose.forEach(btn =>
  btn.addEventListener('click', function () {
    btn.closest('.feedback-display').classList.add('feedback-hidden');
    btn.closest('.feedback-display').classList.remove('feedback-display');
  })
);

// const fact = function () {
//   fetch("https://uselessfacts.jsph.pl/random.json?language=en")
//     .then((res) => {
//       console.log(res);
//       return res.json();
//     })
//     .then((data) => data.text);
// };
// const randomFact = fact();
// console.log(randomFact);

// const factRandom = async function () {
//   try {
//     const res = await fetch(
//       "https://uselessfacts.jsph.pl/random.json?language=en"
//     );
//     if (!res.ok)
//       throw new Error(`Couldn't generate random fact. ${err.message}`);

//     const data = await res.json();
//     console.log(data.text);
//     funFact.textContent = data.text;
//   } catch (err) {
//     console.log(err);
//   }
// };

// prettier-ignore
const alphaArr = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
];
const numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const newArr = [];
let arr;
const randomCode = length => {
  for (let i = 0; i < length; i++) {
    //random alphanumeric

    arr = [
      alphaArr[Math.floor(Math.random(i) * 26)],
      alphaArr[Math.floor(Math.random(i) * 26)],
      alphaArr[Math.floor(Math.random(i) * 26)],
      numArr[Math.floor(Math.random(i) * 10)],
      alphaArr[Math.floor(Math.random(i) * 26)],
      numArr[Math.floor(Math.random(i) * 10)],
    ].join('');

    newArr.push(arr);
  }
  console.log(newArr);
};
// randomCode(6750);

// function to generate coupons property values
// const slicePosition = function (start, end) {
//   return newArr.slice(start, end);
// };

// const coupons = {
//   discount100naira: slicePosition(0, 20),
//   discount10Percent: slicePosition(20, 40),
//   discount200naira: slicePosition(40, 60),
//   discount500naira: slicePosition(60, 80),
//   discount20percent: slicePosition(80, 85),
//   freeDelivery: slicePosition(85, 100),
// };

// console.log(coupons);
// });
