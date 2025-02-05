export class Calculator {
    add(input: string): number {
        if (input === "")
            return 0;
        if (input.length === 1)
            return parseInt(input);
        const numbers = input.split(",");
        return parseInt(numbers[0]) + parseInt(numbers[1]);
    }
}