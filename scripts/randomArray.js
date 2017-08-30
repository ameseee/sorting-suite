const randomArray = (count) => {
  let numbers = [];
  let max = 100;

  for (let i = 0; i < count; i++) {
    let randomNumber = Math.floor(Math.random() * max);

    numbers.push(randomNumber);
  }
  return numbers;
}

export default randomArray
