const codes = document.querySelector('.codes');
codes.textContent = 'Hello world';

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
  // newArr.slice(0, 10);
  let html = `
  <h1 class="h1">Coupons</h1>
  <h2>Discount Vouchers:</h2>
    <h2>100 discount:</h2>  <h3 class="numbers"> ${newArr
      .splice(0, 600)
      .join('  ')}</h3>
    <h2>10% discount:</h2>  <h3 class="numbers"> ${newArr
      .splice(0, 300)
      .join('  ')}</h3>
    <h2>200 discount:</h2>  <h3 class="numbers"> ${newArr
      .splice(0, 300)
      .join('  ')}</h3>
    <h2>500 discount:</h2>  <h3 class="numbers"> ${newArr
      .splice(0, 100)
      .join('  ')}</h3>
    <h2>20% discount:</h2>  <h3 class="numbers"> ${newArr
      .splice(0, 150)
      .join('  ')}</h3>
    <h2>Free delivery:</h2>  <h3 class="numbers"> ${newArr
      .splice(0, 600)
      .join('  ')}</h3>
  <h2>Free food:</h2>
    <h2>Free Chips:</h2>  <h3 class="numbers"> ${newArr
      .splice(0, 500)
      .join('  ')}</h3>
    <h2>Buy1 Get1 PRP: </h2>  <h3 class="numbers"> ${newArr
      .splice(0, 500)
      .join('  ')}</h3>
  <h2>Branded Gifts:</h2>
    <h2>Wine Glasses:</h2>  <h3 class="numbers"> ${newArr
      .splice(0, 20)
      .join('  ')}</h3>
    <h2>Keyholders:</h2>  <h3 class="numbers"> ${newArr
      .splice(0, 25)
      .join('  ')}</h3>
    <h2>Wristbands:</h2>  <h3 class="numbers"> ${newArr
      .splice(0, 200)
      .join('  ')}</h3>
    <h2>Cups:</h2>  <h3 class="numbers"> ${newArr.splice(0, 50).join('  ')}</h3>
    <h2>Shirts:</h2>  <h3 class="numbers"> ${newArr
      .splice(0, 10)
      .join('  ')}</h3>
    <h2>Bags:</h2>  <h3 class="numbers"> ${newArr.splice(0, 10).join('  ')}</h3>
    <h2>Hats:</h2>  <h3 class="numbers"> ${newArr.splice(0, 10).join('  ')}</h3>
  <h2>Rest:</h2>  <h3 class="numbers"> ${newArr.splice(0).join('  ')}</h3>

  `;
  console.log(document.querySelector('h1'));
  codes.insertAdjacentHTML('beforebegin', html);
};
randomCode(6750);

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
const myarr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
// console.log(myarr.slice(0, 5));
// console.log(myarr.slice(5, 10));
// console.log(myarr.slice(10, 15));
// console.log(myarr.slice(15, 20));
// console.log(myarr.splice(0, 5));
// console.log(myarr.splice(0, 3));
// console.log(myarr.splice(0, 5));
// console.log(myarr.splice(0));
