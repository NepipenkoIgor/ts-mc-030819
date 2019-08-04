interface IAccount {
    firstName: string;
    age: number;
}

//
// let person = IAccount;
//
//
// let userAccount = {
//     age: 33,
//     firstName: 'Igor',
// }
//
// let u1: typeof userAccount;
//
// class Point {
//
// }
//
// let p: Point;


// let num: IAccount;
//
// function f(a: IAccount): IAccount {
//
// }


let isDone: boolean = true;
let str: string = 'str';

let num: number = 1;
num = 0xf00d;
num = 0b1010;
num = 0o1010;
num = NaN;
num = null;

let nill: null = null;
let und: undefined = undefined;


let bNum: bigint = 4n;


const s1: unique symbol = Symbol('s1');
let s2: unique symbol = Symbol('s2');

let strictObj = {
    [s1]: 100,
    [s2]: 'ts',
}

let a1 = strictObj[s1];

function onlyS1(_value: typeof s1) {

}

onlyS1(s2);

// type Digit = 1 | 2 | 3 | 4;
//
// let num: Digit = 1;
// num = 0xf00d;
// num = 0b1010;
// num = 0o1010;
// num = NaN;
// num = null;
// interface IAnimateOptions {
//     delay: number;
//     easing: 'easy-out' | 'easy-in';
// }
//
// declare class UIElement {
//     public animate(options: IAnimateOptions): void;
// }
//
//
// new UIElement().animate({delay: 1000, easing: 'easy-in'});


let anyType: any = {};
anyType.a = 1;
anyType['b'] = 2;
anyType = 1;
anyType();


let anyType1: unknown = {a: 1};
anyType1.a = 1;
anyType1['b'] = 2;
anyType1 = 1;
anyType1();

let v: void = undefined;

function f(): never {
    throw  new Error();
}

// const user: {
//     firstName?: string;
//     readonly age: number
// } = {
//     age: 33,
// }
// user.age = 22;
//
// let users = [user];
//
// let keys: keyof typeof users;
// keys = 'age';


// interface IFact {
//     userId: string;
//     factId: number;
//     useTo: number;
//     value: any;
// }
//
// type Action = { action: string, data: IFact };
//
// const dataList: Action[] = [];
//
// const uniqValue = (): keyof IFact => {
//     return 'factId';
// }
//
// dataList.map((item: Action) => {
//     if (item.data[uniqValue()] === 2) {
//
//     }
//     return item;
// })
//
//
// let arr: readonly number[] = [1, 2, 3, 4, 5];
// arr[100] = 1;
// arr.push(1);
//
// let tuple: readonly [number, string] = [1, 'ts'];
// tuple[100] = 1;
// tuple.push(1);


// let x = 10 as const;
//
//
//
//let y = [1, 'ts'] as const;
//
// let user = {
//     age: 33,
//     firstName: 'Igor',
// } as const;
//
// user ={}

// let cc: [1] | [2];
// cc = [1];
