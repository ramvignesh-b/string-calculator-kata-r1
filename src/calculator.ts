export class Calculator {
    add(input: string): number {
        if (input === "")
            return 0;
        if (input.length === 1)
            return parseInt(input);
        const numbers = input.split(",");
        if (input.length > 2) {
            return numbers.reduce((sum, number) => sum + parseInt(number), 0);
        }
        return parseInt(numbers[0]) + parseInt(numbers[1]);
    }
}