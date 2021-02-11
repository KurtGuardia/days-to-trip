import confetti from 'https://cdn.skypack.dev/canvas-confetti';

const time = document.querySelector('.time');
const today = new Date();
const oneDay = 1000 * 60 * 60 * 24;
const arrival = new Date(2021, 6, 1);
const result = Math.round(arrival.getTime() - today.getTime()) / oneDay;
const finalResult = result.toFixed(0);
const arrivalMonths = Math.floor(finalResult / 30);
const arrivalTotalDays = finalResult - arrivalMonths * 30;
const arrivalExactWeeks = arrivalTotalDays / 7;
const arrivalWeeks = Math.floor(arrivalExactWeeks);
console.log(arrivalWeeks);
const arrivalDays =
  arrivalTotalDays - arrivalWeeks * 7 < 0
    ? 0
    : arrivalTotalDays - arrivalWeeks * 7;

console.log(
  `Arrival Months: ${arrivalMonths}, Arrival Total Days: ${arrivalTotalDays}, Arrival Weeks: ${arrivalWeeks}, Arrival Days: ${arrivalDays}`
);

time.innerHTML = `${arrivalMonths} meses, ${arrivalWeeks} semanas, ${arrivalDays} dias.`;

confetti();
