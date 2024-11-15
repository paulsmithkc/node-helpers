/**
 * This function takes a sequence of items and batches them into a sequence of chunks.
 *
 * WARNING: The chunk method uses Generators which is not available in some browsers.
 * @param chunkSize the maximum size of each chunk
 * @param items the original sequence of items
 */
export function* chunkSync<T>(
  chunkSize: number,
  items: Generator<T> | T[],
): Generator<T[]> {
  let batch: T[] = [];

  for (const item of items) {
    batch.push(item);
    if (batch.length >= chunkSize) {
      yield batch;
      batch = [];
    }
  }

  if (batch.length > 0) {
    yield batch;
  }
}
