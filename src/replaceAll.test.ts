import { replaceAll } from './replaceAll';

const prototypeReplaceAll = String.prototype.replaceAll;

afterEach(() => {
  String.prototype.replaceAll = prototypeReplaceAll;
});

describe('replaceAll()', () => {
  describe('using String.replaceAll()', () => {
    beforeEach(() => {
      String.prototype.replaceAll = prototypeReplaceAll;
    });
    it('undefined, null, and empty string', () => {
      expect(replaceAll(undefined as any, /\s+/g, ' ')).toEqual('');
      expect(replaceAll(null as any, /\s+/g, ' ')).toEqual('');
      expect(replaceAll('', /\s+/g, ' ')).toEqual('');
    });
    it('number', () => {
      expect(replaceAll(Number.NaN as any, /\s+/g, ' ')).toEqual('NaN');
      expect(replaceAll(0 as any, /\s+/g, ' ')).toEqual('0');
      expect(replaceAll(1 as any, /\s+/g, ' ')).toEqual('1');
      expect(replaceAll(2 as any, /\s+/g, ' ')).toEqual('2');
    });
    it('string with nothing to replace', () => {
      expect(replaceAll('test', /\s+/g, ' ')).toEqual('test');
    });
    it('string with one replacement', () => {
      expect(replaceAll('test\n1', /\s+/g, ' ')).toEqual('test 1');
      expect(replaceAll('test   1', /\s+/g, ' ')).toEqual('test 1');
    });
    it('string with two replacements', () => {
      expect(replaceAll('test\nfoo\nbar', /\s+/g, ' ')).toEqual('test foo bar');
      expect(replaceAll('test\nfoo bar', /\s+/g, ' ')).toEqual('test foo bar');
    });
    it('string with three replacements', () => {
      expect(replaceAll('test\n foo  bar\n shoo', /\s+/g, ' ')).toEqual(
        'test foo bar shoo'
      );
    });
    it('non-global regex', () => {
      expect(() => replaceAll('foo bar', /\s/, ' ')).toThrow(
        'global flag is required'
      );
    });
  });

  describe('using String.replace()', () => {
    beforeEach(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      delete String.prototype.replaceAll;
    });
    it('undefined, null, and empty string', () => {
      expect(replaceAll(undefined as any, /\s+/g, ' ')).toEqual('');
      expect(replaceAll(null as any, /\s+/g, ' ')).toEqual('');
      expect(replaceAll('', /\s+/g, ' ')).toEqual('');
    });
    it('number', () => {
      expect(replaceAll(Number.NaN as any, /\s+/g, ' ')).toEqual('NaN');
      expect(replaceAll(0 as any, /\s+/g, ' ')).toEqual('0');
      expect(replaceAll(1 as any, /\s+/g, ' ')).toEqual('1');
      expect(replaceAll(2 as any, /\s+/g, ' ')).toEqual('2');
    });
    it('string with nothing to replace', () => {
      expect(replaceAll('test', /\s+/g, ' ')).toEqual('test');
    });
    it('string with one replacement', () => {
      expect(replaceAll('test\n1', /\s+/g, ' ')).toEqual('test 1');
      expect(replaceAll('test   1', /\s+/g, ' ')).toEqual('test 1');
    });
    it('string with two replacements', () => {
      expect(replaceAll('test\nfoo\nbar', /\s+/g, ' ')).toEqual('test foo bar');
      expect(replaceAll('test\nfoo bar', /\s+/g, ' ')).toEqual('test foo bar');
    });
    it('string with three replacements', () => {
      expect(replaceAll('test\n foo  bar\n shoo', /\s+/g, ' ')).toEqual(
        'test foo bar shoo'
      );
    });
    it('non-global regex', () => {
      expect(() => replaceAll('foo bar', /\s/, ' ')).toThrow(
        'global flag is required'
      );
    });
  });
});
