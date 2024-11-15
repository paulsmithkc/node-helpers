export function* arrayToIterator<T>(arr: T[] | null | undefined): Generator<T> {
  if (arr) {
    for (const item of arr) {
      yield item;
    }
  }
}
