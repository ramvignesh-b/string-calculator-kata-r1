export class Calculator {
    add(input: string): number {
        if (input === "")
            return 0;
        const numbers = this.filterNumbers(this.parseNumbers(input));
        this.validateNumbers(numbers);

        return numbers.reduce((sum, number) => sum + number, 0);
    }

    private validateNumbers(numbers: number[]) {
        if (numbers.some(number => number < 0)) {
            const negatives = numbers.filter(number => number < 0);
            throw new Error(`negatives not allowed: ${negatives.join(", ")}`);
        }
    }

    private parseNumbers(input: string): number[] {
        const separatorList = ['\n', ','];
        let numberString = input;
        if (input.startsWith("//[")) {
            const endOfSeparator = input.indexOf("]");
            const separator = input.substring(3, endOfSeparator);
            separatorList.push(separator.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'))
            numberString = input.substring(endOfSeparator + 2);
            console.log(numberString)
        } else if (input.startsWith("//")) {
            const separator = input[2];
            separatorList.push(separator);
            numberString = input.substring(4);
        }
        return numberString.replace(new RegExp(separatorList.join('|'), "g"), ",").split(",").map(Number);
    }

    private filterNumbers(numbers: number[]) {
        return numbers.filter(number => number <= 1000)
    }
}