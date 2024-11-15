/**
 * WARNING: The measureNow method uses process.hrtime which is not available in any browsers.
 * @returns the current time in nanoseconds, returned by process.hrtime.bigint
 */
export function measureNow(): bigint {
  return process.hrtime.bigint();
}

/**
 * WARNING: The measureNow method uses process.hrtime which is not available in any browsers.
 * @param end the time when the operation ends
 * @param start the time when the operation starts
 * @returns the duration in milliseconds formatted as a string
 */
export function measureDur(
  end: bigint | undefined,
  start: bigint | undefined
): string | undefined {
  if (start === undefined) {
    return undefined;
  }

  if (end === undefined) {
    end = measureNow();
  }

  return ((end - start) / 1_000_000n).toString();
}
