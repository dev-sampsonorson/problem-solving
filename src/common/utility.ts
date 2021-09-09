export class Utility {

    public static printArray(input: any[]): void {
        let result: string = input.reduce((prev: any, curr: any, i: number) => {
            return prev += `${curr}, `;
        }, '');

        console.log(result);
    }
}