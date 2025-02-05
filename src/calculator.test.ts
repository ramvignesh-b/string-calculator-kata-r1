import {beforeEach, describe, expect, it} from 'vitest';
import {Calculator} from './calculator';

describe('calculator', () => {
    let calculator: Calculator;

    beforeEach(() => {
        calculator = new Calculator();

    })
    it('should return 0 for an empty string', () => {
        expect(calculator.add('')).toBe(0);
    });

    it('should return the same number for a single input', () => {
        expect(calculator.add('1')).toBe(1);
    });

    it('should return the sum of two numbers separated by a comma', () => {
        expect(calculator.add('1,2')).toBe(3);
    });

    it('should return the sum of arbitrary numbers separated by a comma', () => {
        expect(calculator.add('1,2,3,4')).toBe(10);
    });

    it('should handle newline as a separator', () => {
        expect(calculator.add('1\n2,3')).toBe(6);
    });

});