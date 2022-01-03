const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
  let hexNumber = ['#'];
  for (let i = 0; i < 6; i++) {
    // let randomNumber = randomizer();
    // hexNumber.push(hex[randomNumber]);
    hexNumber += hex[randomizer()];
  }
  // const colorPicked = hexNumber.join('');
  const colorPicked = hexNumber;
  console.log(colorPicked);
  document.body.style.backgroundColor = `${colorPicked}`;
  color.textContent = `${colorPicked}`;
});

function randomizer() {
  const random = Math.floor(Math.random() * hex.length);
  return random;
}

// const arrayo = (function tester() {
//   for (let i = 0; i < 6; i++) {
//     arrayo.push(2);
//   }
// })();

// console.log(arrayo);
