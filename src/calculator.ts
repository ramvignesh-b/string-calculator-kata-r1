export class Calculator {
    add(input: string): number {
        if (input === "")
            return 0;
        const numbers = this.parseNumbers(input);
        return numbers.reduce((sum, number) => sum + number, 0);
    }

    private parseNumbers(input: string): number[] {
        if (input.startsWith("//")) {
            const separator = input[2];
            return input.substring(4).split(separator).map(Number);
        }
        return input.replace("\n", ",").split(",").map(Number);
    }
}