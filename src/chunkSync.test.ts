import { chunkSync } from "./chunkSync";

describe("chunkSync", () => {
  function* range(count: number): Generator<number> {
    for (let i = 1; i <= count; ++i) {
      yield i;
    }
  }

  function chunkLoop<T>(chunkSize: number, items: Generator<T> | T[]): T[][] {
    const chunks: T[][] = [];
    for (const c of chunkSync(chunkSize, items)) {
      chunks.push(c);
    }
    return chunks;
  }

  it("empty list", () => {
    expect(chunkLoop(3, [])).toEqual([]);
    expect(chunkLoop(3, range(0))).toEqual([]);
  });

  it("less than 1 chunk", () => {
    expect(chunkLoop(3, [1, 2])).toEqual([[1, 2]]);
    expect(chunkLoop(3, range(2))).toEqual([[1, 2]]);
  });

  it("exactly 1 chunk", () => {
    expect(chunkLoop(3, [1, 2, 3])).toEqual([[1, 2, 3]]);
    expect(chunkLoop(3, range(3))).toEqual([[1, 2, 3]]);
  });

  it("more than 1 chunk", () => {
    expect(chunkLoop(3, [1, 2, 3, 4])).toEqual([[1, 2, 3], [4]]);
    expect(chunkLoop(3, range(4))).toEqual([[1, 2, 3], [4]]);
  });

  it("more than 2 chunks", () => {
    expect(chunkLoop(3, [1, 2, 3, 4, 5, 6, 7])).toEqual([
      [1, 2, 3],
      [4, 5, 6],
      [7],
    ]);
    expect(chunkLoop(3, range(7))).toEqual([[1, 2, 3], [4, 5, 6], [7]]);
  });
});
