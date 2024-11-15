import { arrayToIterator } from './arrayToIterator';
import { iteratorToArray } from './iteratorToArray';

describe('arrayToIterator', () => {
  it('null/undefined list', async () => {
    expect(await iteratorToArray(arrayToIterator(null))).toEqual([]);
    expect(await iteratorToArray(arrayToIterator(undefined))).toEqual([]);
  });

  it('empty list', async () => {
    expect(await iteratorToArray(arrayToIterator([]))).toEqual([]);
  });

  it('1-element list', async () => {
    expect(await iteratorToArray(arrayToIterator([1]))).toEqual([1]);
  });

  it('2-element list', async () => {
    expect(await iteratorToArray(arrayToIterator([1, 2]))).toEqual([1, 2]);
  });
});
