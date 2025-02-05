import {describe, expect, it} from 'vitest';
import {Calculator} from './calculator';

describe('calculator', () => {

    it('should return 0 on empty string', () => {
        const calculator = new Calculator();
        expect(calculator.add('')).toBe(0);
    });

});