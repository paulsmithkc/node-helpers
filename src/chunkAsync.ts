/**
 * This function takes a sequence of items and batches them into a sequence of chunks.
 *
 * WARNING: The chunkAsync method uses AsyncGenerators which is not available in some browsers.
 * @param chunkSize the maximum size of each chunk
 * @param items the original sequence of items
 */
export async function* chunkAsync<T>(
  chunkSize: number,
  items: AsyncGenerator<T> | Generator<T> | T[]
): AsyncGenerator<T[]> {
  let batch: T[] = [];

  for await (const item of items) {
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
