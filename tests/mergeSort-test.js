import { assert } from 'chai';
import { mergeSort, merge } from '../scripts/mergeSort';
import randomArray from '../scripts/randomArray';

describe('mergesort', () => {

  it('should be a function', () => {
    assert.equal( typeof mergeSort, 'function' );
    assert.equal( typeof merge, 'function' );
  });

  it('should sort two numbers in an array from least to greatest', () => {
    let array = [ 2, 1 ];

    assert.deepEqual(array, [2, 1]);
    assert.deepEqual(mergeSort(array), [1, 2]);
  });

  it('should sort five numbers in an array from least to greatest', () => {
    let array = [3, 1, 5, 8, 9];

    assert.deepEqual(array, [3, 1, 5, 8, 9]);
    assert.deepEqual(mergeSort(array), [1, 3, 5, 8, 9]);
  })

  it('should sort an array of negative numbers', () => {
    let array = [-3, -5, -1, -2, -4];

    assert.deepEqual(array, [-3, -5, -1, -2, -4])
    assert.deepEqual(mergeSort(array), [-5, -4, -3, -2, -1])
  });

  it('should sort one thousand numbers in an array from least to greatest', () => {
    let newArray = randomArray(1000);

    mergeSort(newArray);
    assert.equal(newArray[0] <= newArray[1], true);
    assert.equal(newArray[Math.floor(newArray.length /2)] <= newArray[Math.floor(newArray.length / 2) + 1], true);
    assert.equal(newArray[newArray.length - 1] >= newArray[newArray.length - 2], true);
  });

  it('should sort a large array of negative numbers', () => {
    let array = randomArray(10, -100, 0);

    assert.equal(mergeSort(array)[0] <= mergeSort(array)[1], true);
  });

});
