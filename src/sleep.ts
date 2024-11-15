export function sleep(ms: number): Promise<void> {
  if (ms > 0) {
    return new Promise<void>((resolve) => {
      setTimeout(resolve, ms);
    });
  } else {
    return Promise.resolve();
  }
}
