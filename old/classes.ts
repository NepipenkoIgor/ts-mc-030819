// class Point {
//     public x: number = 1;
//     public y: number = 2;
//
//     public constructor(x: number);
//     public constructor(x: number, y: number);
//     public constructor(x: number, y?: number) {
//         this.x = x;
//         this.y = y || 0;
//     }
//
//     public onInit(): void {
//
//     }
// }
//
// let p = new Point(1, 2);
// p.onInit();


// class Point {
//
//     public constructor(
//         public x: number,
//         private y: number,
//         protected z: number,
//     ) {
//     }
//
//     public onInit(): void {
//     }
// }
//
// class CustomPoint extends Point {
//     public constructor(x: number, y: number, z: number) {
//         super(x, y, z);
//     }
//     public onInit(): void {
//         // do something
//         super.onInit();
//     }
// }
//
// let p = new Point(1, 2);
// p.


// class Singleton {
//
//     public static getInstance(): Singleton {
//         if (!Singleton.instance) {
//             Singleton.instance = new Singleton();
//         }
//         return Singleton.instance;
//     }
//
//     private static instance: Singleton;
//
//     private constructor() {
//     }
//
// }
//
// let ins1 = Singleton.getInstance();
// let ins2 = Singleton.getInstance();
// let ins3 = Singleton.getInstance();

// type Constructable = new (...args: any[]) => {};
//
// function Timestamped<BaseClass extends Constructable>(Base: BaseClass) {
//     return class extends Base {
//         public timestamp = new Date();
//     };
// }
//
// function Tagged<BaseClass extends Constructable>(Base: BaseClass) {
//     return class extends Base {
//         public tag = ['ts'];
//     };
// }
//
// class Point {
//
//     public constructor(
//         public x: number,
//         private y: number,
//         protected z: number,
//     ) {
//     }
//
//     public onInit(): void {
//     }
// }
//
// class CustomPoint extends Tagged(Timestamped(Point)) {
// }
//
//
// const p = new CustomPoint(1, 2, 3);
// p.timestamp

// abstract class AbstractInput {
//     public abstract value: any;
//
//     public onBlur(): void {
//         // do something
//     }
//
//     public abstract getValue(): any;
// }
//
// class Input extends AbstractInput {
//     public value: string = '';
//
//     public getValue(): string {
//         return this.value;
//     }
// }
