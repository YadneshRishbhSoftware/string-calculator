import { add } from './Calculatorfun/Calculator';
import { describe, expect, test } from 'vitest';
describe('add function', () => {
  test('should return the sum of comma-separated numbers', () => {
    expect(add('1,2,3')).toBe(6);
  });

  test('should throw an error when negative numbers are present', () => {
    expect(() => add('1,-2,3')).toThrow('negative numbers not allowed: -2');
  });

  test('should throw an error with multiple negative numbers', () => {
    expect(() => add('1,-2,-3')).toThrow('negative numbers not allowed: -2, -3');
  });

  test('should handle empty strings and return 0', () => {
    expect(add('')).toBe(0);
  });

  test('should handle quotes around numbers and still sum correctly', () => {
    expect(add('"1","2","3"')).toBe(6);
  });

  test('should handle extra spaces and return correct sum', () => {
    expect(add(' 1 , 2 , 3 ')).toBe(6);
  });

  test('should handle a single number input', () => {
    expect(add('5')).toBe(5);
  });
});
