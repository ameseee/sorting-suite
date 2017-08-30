import { assert } from 'chai';
import bubbleSort from '../scripts/bubbleSort';
import randomArray from '../scripts/randomArray';

describe('bubble sort', () => {

  it('should be a function', () => {
    assert.equal( typeof bubbleSort, 'function' );
  });

  it('should sort two numbers in an array from least to greatest', () => {
    let array = [ 3, 1 ];

    assert.equal(array[0] > array[1], true);
    bubbleSort(array);
    assert.equal(array[0] < array[1], true);
  });

  it('should sort five numbers in an array from least to greatest', () => {
    let array = [ 3, 1, 4, 2, 7];

    assert.equal(array[0] > array[1], true);
    bubbleSort(array);
    assert.equal(array[0] < array[1], true);
  });

  it('should sort an array of negative numbers', () => {
    let array = [-3, -5, -1, -2, -4];

    assert.deepEqual(array, [-3, -5, -1, -2, -4])
    assert.deepEqual(bubbleSort(array), [-5, -4, -3, -2, -1])
  });

  it('should sort one thousand numbers in an array from least to greatest', () => {
    let newArray = randomArray(1000);

    bubbleSort(newArray);
    assert.equal(newArray[0] <= newArray[1], true);
    assert.equal(newArray[Math.floor(newArray.length /2)] <= newArray[Math.floor(newArray.length / 2) + 1], true);
    assert.equal(newArray[newArray.length - 1] >= newArray[newArray.length - 2], true);
  });
  
  it('should sort a large array of negative numbers', () => {
    let array = randomArray(10, -100, 0);

    assert.equal(bubbleSort(array)[0] <= bubbleSort(array)[1], true);
  });

});
