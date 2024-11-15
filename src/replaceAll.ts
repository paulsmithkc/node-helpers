export function replaceAll(
  input: string,
  searchValue: string | RegExp,
  replaceValue: string
): string {
  if (searchValue instanceof RegExp && !searchValue.flags.includes('g')) {
    throw new Error('global flag is required');
  }
  if (input === undefined || input === null) {
    return '';
  }
  if (typeof input !== 'string') {
    input = String(input);
  }

  if (typeof input.replaceAll === 'function') {
    return input.replaceAll(searchValue, replaceValue);
  } else {
    let output = input;
    for (;;) {
      const newOutput = output.replace(searchValue, replaceValue);
      if (newOutput === output) {
        break;
      } else {
        output = newOutput;
      }
    }
    return output;
  }
}
