import { assert } from 'chai';
import quickSort from '../scripts/quickSort';
import randomArray from '../scripts/randomArray';

describe('quickSort', () => {

  it('should be a function', () => {
    assert.equal( typeof quickSort, 'function' );
  });

  it('should sort an array of numbers', () => {
    let array = [4, 2, 5, 1, 3];

    assert.deepEqual(array, [4, 2, 5, 1, 3]);
    assert.deepEqual(quickSort(array), [1, 2, 3, 4, 5])
  });

  it('should sort five negative numbers', () => {
    let array = [-3, -5, -1, -2, -4];

    assert.deepEqual(array, [-3, -5, -1, -2, -4])
    assert.deepEqual(quickSort(array), [-5, -4, -3, -2, -1])
  });

  it('should sort a large array of numbers', () => {
    let array = randomArray(1320, 0, 100);

    assert.equal(quickSort(array)[0] <= quickSort(array)[1], true);
  });

});
