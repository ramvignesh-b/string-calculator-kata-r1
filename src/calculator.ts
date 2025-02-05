export class Calculator {
    add(input: string): number {
        if (input === "")
            return 0;
        return parseInt(input);
    }
}