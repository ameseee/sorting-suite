import { assert } from 'chai';
import insertionSort from '../scripts/insertionSort';
import randomArray from '../scripts/randomArray';

describe('insertion sort', () => {

  it('should be a function', () => {
    assert.equal( typeof insertionSort, 'function' );
  });

  it('should sort two numbers in an array from least to greatest', () => {
    let array = [ 2, 1 ];

    assert.equal(array[0] > array[1], true);
    insertionSort(array);
    assert.equal(array[0] < array[1], true);
  });

  it('should sort five numbers in an array from least to greatest', () => {
    let array = [3, 1, 5, 8, 9];

    assert.equal(array[0] >= array[1], true);
    insertionSort(array);
    assert.equal(array[0] <= array[1], true);
  });

  it('should sort five negative numbers', () => {
    let array = [-3, -5, -1, -2, -4];

    assert.deepEqual(array, [-3, -5, -1, -2, -4])
    assert.deepEqual(insertionSort(array), [-5, -4, -3, -2, -1])
  });

  it('should sort one thousand numbers in an array from least to greatest', () => {
    let newArray = randomArray(1000);

    insertionSort(newArray);
    assert.equal(newArray[0] <= newArray[1], true);
    assert.equal(newArray[Math.floor(newArray.length /2)] <= newArray[Math.floor(newArray.length / 2) + 1], true);
    assert.equal(newArray[newArray.length - 1] >= newArray[newArray.length - 2], true);
  });

});
