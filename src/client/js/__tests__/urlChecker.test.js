import { checkURL } from '../urlChecker';

describe('checkURL function tests', () => {
  test('should return true for a valid URL', () => {
    expect(checkURL('https://example.com')).toBe(true);
  });

  test('should return false for an invalid URL', () => {
    expect(checkURL('invalid-url')).toBe(false);
  });
});
