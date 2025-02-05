import {describe, expect, it} from 'vitest';
import {Calculator} from './calculator';

describe('calculator', () => {

    it('should return 0 for an empty string', () => {
        let calculator = new Calculator();
        expect(calculator.add('')).toBe(0);
    });

});