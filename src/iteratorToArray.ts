export async function iteratorToArray<T>(
  itr: AsyncGenerator<T> | Generator<T> | T[] | null | undefined
): Promise<T[]> {
  const arr: T[] = [];
  if (itr) {
    for await (const item of itr) {
      arr.push(item);
    }
  }
  return arr;
}
