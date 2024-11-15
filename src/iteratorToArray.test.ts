import { iteratorToArray } from './iteratorToArray';

describe('iteratorToArray', () => {
  function* rangeSync(count: number): Generator<number> {
    for (let i = 1; i <= count; ++i) {
      yield i;
    }
  }

  async function* rangeAsync(count: number): AsyncGenerator<number> {
    for (let i = 1; i <= count; ++i) {
      yield i;
    }
  }

  it('null/undefined list', async () => {
    expect(await iteratorToArray(null)).toEqual([]);
    expect(await iteratorToArray(undefined)).toEqual([]);
  });

  it('empty list', async () => {
    expect(await iteratorToArray([])).toEqual([]);
    expect(await iteratorToArray(rangeSync(0))).toEqual([]);
    expect(await iteratorToArray(rangeAsync(0))).toEqual([]);
  });

  it('1-element list', async () => {
    expect(await iteratorToArray([1])).toEqual([1]);
    expect(await iteratorToArray(rangeSync(1))).toEqual([1]);
    expect(await iteratorToArray(rangeAsync(1))).toEqual([1]);
  });

  it('2-element list', async () => {
    expect(await iteratorToArray([1, 2])).toEqual([1, 2]);
    expect(await iteratorToArray(rangeSync(2))).toEqual([1, 2]);
    expect(await iteratorToArray(rangeAsync(2))).toEqual([1, 2]);
  });
});
