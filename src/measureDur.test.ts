import { measureDur, measureNow } from './measureDur';
import { sleep } from './sleep';

describe('measureNow and measureDur', () => {
  it('measureNow should be bigint type', () => {
    expect(typeof measureNow()).toEqual('bigint');
  });

  it('measureDur should measure time in milliseconds', async () => {
    const start = measureNow();
    const ms = 1000;
    await sleep(ms);
    const end = measureNow();
    const dur = measureDur(end, start);
    expect(typeof dur).toBe('string');

    const durAsNum = parseInt(dur as string, 10);
    expect(durAsNum).toBeGreaterThan(ms - 100);
    expect(durAsNum).toBeLessThan(ms + 100);
  });

  it('measureDur should return undefined when start & end are undefined', () => {
    expect(measureDur(undefined, undefined)).toBeUndefined();
  });

  it('measureDur should return undefined when start is undefined', () => {
    const end = measureNow();
    expect(measureDur(end, undefined)).toBeUndefined();
  });

  it('measureDur should assume now when end is undefined', async () => {
    const start = measureNow();
    const ms = 1000;
    await sleep(ms);
    const end = undefined;
    const dur = measureDur(end, start);
    expect(typeof dur).toBe('string');

    const durAsNum = parseInt(dur as string, 10);
    expect(durAsNum).toBeGreaterThanOrEqual(ms - 100);
    expect(durAsNum).toBeLessThanOrEqual(ms + 100);
  });
});
