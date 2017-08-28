import { assert } from 'chai';
import bubbleSort from '../scripts/bubbleSort';

const randomArray = (count) => {
  let numbers = [];
  let max = 100;

  for (let i = 0; i < count; i++) {
    let randomNumber = Math.floor(Math.random() * max);

    numbers.push(randomNumber);
  }
  return numbers;
}


describe('bubble sort', () => {

  it('should be a function', () => {
    assert.equal( typeof bubbleSort, 'function' );
  })

  it('should sort two numbers in an array from least to greatest', () => {
    let array = [ 3, 1 ];

    assert.equal(array[0] > array[1], true);
    bubbleSort(array);
    assert.equal(array[0] < array[1], true);
  })

  it('should sort five numbers in an array from least to greatest', () => {
    let array = [ 3, 1, 4, 2, 7];

    assert.equal(array[0] > array[1], true);
    bubbleSort(array);
    assert.equal(array[0] < array[1], true);
  })

  it('should sort one thousand numbers in an array from least to greatest', () => {
    let newArray = randomArray(1000);

    bubbleSort(newArray);
    assert.equal(newArray[0] <= newArray[1], true);
    assert.equal(newArray[50] <= newArray[51], true);
  })

});
