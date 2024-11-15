import { sleep } from './sleep';

jest.useFakeTimers();

describe('sleep', () => {
  test('should not resolve until timeout has elapsed', async () => {
    const spy = jest.fn();
    sleep(100).then(spy);

    jest.advanceTimersByTime(20);
    expect(spy).not.toHaveBeenCalled();

    jest.advanceTimersByTime(80);
    await Promise.resolve();
    expect(spy).toHaveBeenCalled();
  });

  test('should resolve immediately with zero as input', async () => {
    const spy = jest.fn();
    sleep(0).then(spy);
    await Promise.resolve();
    expect(spy).toHaveBeenCalled();
  });

  test('should resolve immediately with negative inputs', async () => {
    const spy = jest.fn();
    sleep(-100).then(spy);
    await Promise.resolve();
    expect(spy).toHaveBeenCalled();
  });
});
