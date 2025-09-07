import { transformClass } from './transformClass';

describe('transformString', () => {
  test('преобразует AaaaAaaa в aaaa-aaaa', () => {
    expect(transformClass('AaaaAaaa')).toBe('aaaa-aaaa');
  });

  test('обрабатывает AaaAaaAaa', () => {
    expect(transformClass('AaaAaaAaa')).toBe('aaa-aaa-aaa');
  });

  test('не меняет строку без заглавных букв внутри', () => {
    expect(transformClass('aaaa')).toBe('aaaa');
  });

  test('работает с последовательными заглавными буквами', () => {
    expect(transformClass('AAAAaaAaaa')).toBe('a-a-a-aaa-aaaa');
  });
});
