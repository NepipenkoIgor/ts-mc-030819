let firstName = 'Igor';
let account = {
    firstName,
    getName() {
        return this.firstName;
    },
}

let person = {...account, age: 33};
let dates = [...[1, 2, 3]];

let {firstName: myName} = person;
let [date] = dates;

for (const d of dates) {
    console.log(d);
}

let sum = (a: number, b: number) => a + b;

class Point {
    public x: number = 1;

    public sum(a: number, b: number): number {
        return a + b
    }
}

function userMessage([start, end]: TemplateStringsArray, {firstName: f}: typeof person) {
    return `${start}${f}${end}`;
}

console.log(userMessage`Good day, ${person} !!!`);

