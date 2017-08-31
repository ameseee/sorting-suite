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
  });

  it('should sort five negative numbers', () => {
    let array = [-3, -5, -1, -2, -4];

    assert.deepEqual(array, [-3, -5, -1, -2, -4])
    assert.deepEqual(mergeSort(array), [-5, -4, -3, -2, -1])
  });

  it('should sort one thousand numbers in an array from least to greatest', () => {
    let array = randomArray(1000);

    assert.equal(mergeSort(array)[array.length - 2] <= mergeSort(array)[array.length - 1], true);
  });

});
