export class Calculator {
    add(input: string): number {
        if (input === "")
            return 0;
        const numbers = this.parseNumbers(input);
        return numbers.reduce((sum, number) => sum + number, 0);
    }

    private parseNumbers(input: string): number[] {
        return input.replace("\n", ",").split(",").map(Number);
    }
}