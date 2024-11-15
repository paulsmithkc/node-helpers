import { chunkAsync } from './chunkAsync';

describe('chunkAsync', () => {
  async function* rangeAsync(count: number): AsyncGenerator<number> {
    for (let i = 1; i <= count; ++i) {
      yield i;
    }
  }

  async function chunkLoopAsync<T>(
    chunkSize: number,
    items: AsyncGenerator<T> | T[]
  ): Promise<T[][]> {
    const chunks: T[][] = [];
    for await (const c of chunkAsync(chunkSize, items)) {
      chunks.push(c);
    }
    return chunks;
  }

  it('empty list', async () => {
    expect(await chunkLoopAsync(3, [])).toEqual([]);
    expect(await chunkLoopAsync(3, rangeAsync(0))).toEqual([]);
  });

  it('less than 1 chunk', async () => {
    expect(await chunkLoopAsync(3, [1, 2])).toEqual([[1, 2]]);
    expect(await chunkLoopAsync(3, rangeAsync(2))).toEqual([[1, 2]]);
  });

  it('exactly 1 chunk', async () => {
    expect(await chunkLoopAsync(3, [1, 2, 3])).toEqual([[1, 2, 3]]);
    expect(await chunkLoopAsync(3, rangeAsync(3))).toEqual([[1, 2, 3]]);
  });

  it('more than 1 chunk', async () => {
    expect(await chunkLoopAsync(3, [1, 2, 3, 4])).toEqual([[1, 2, 3], [4]]);
    expect(await chunkLoopAsync(3, rangeAsync(4))).toEqual([[1, 2, 3], [4]]);
  });

  it('more than 2 chunks', async () => {
    expect(await chunkLoopAsync(3, [1, 2, 3, 4, 5, 6, 7])).toEqual([
      [1, 2, 3],
      [4, 5, 6],
      [7],
    ]);
    expect(await chunkLoopAsync(3, rangeAsync(7))).toEqual([
      [1, 2, 3],
      [4, 5, 6],
      [7],
    ]);
  });
});
