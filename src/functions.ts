// function average(a: number, b: number, c: number): string {
//     const avg = (a + b + c) / 3;
//     return `Average is ${avg}`;
// }
//
// average(1, 2);
// average(1, 2, '2');
// const result: number = average(1, 2, 1);

// function average(a: number, b?: number, c?: number): string {
//     const avg = (a + (b || 0) + (c || 0)) / 3;
//     return `Average is ${avg}`;
// }
//
// average(1);
// average(1, 2);
// average(1, 2, '2');
// const result: number = average(1, 2, 1);

// function average(a: number, b: number = 0, c: number = 0): string {
//     const avg = (a + b + c) / 3;
//     return `Average is ${avg}`;
// }
//
// average(1);
// average(1, 2);
// average(1, 2, '2');
// const result: number = average(1, 2, 1);

type sn = string | number;

function isString(a: sn): a is string {
    return typeof a === 'string';
}

export function average(...args: sn[]): string {
    let total = 0;
    for (const a of args) {
        if (isString(a)) {
            total += Number(a);
            continue;
        }
        total += a;
    }
    const avg = total / args.length;
    return `Average is ${avg}`;
}
//
// average(1);
// average(1, 2);
// average(1, 2, '2');
// const result: number = average(1, 2, 1);

// function average(a: string, b: number): string;
// function average(a: number, b: string): string;
// function average(a: number, b: number, c: number): string;
// function average(...args: sn[]): string {
//     let total = 0;
//     for (const a of args) {
//         if (isString(a)) {
//             total += Number(a);
//             continue;
//         }
//         total += a;
//     }
//     const avg = total / args.length;
//     return `Average is ${avg}`;
// }
//
// average('1', 2);
// average(1, '2');
// average(1, 2);
// average(1, 2, '2');
// const result: number = average(1, 2, 1);
//
// type Cb = (this: void, e: Event) => void;
//
// class UIElement {
//     public addClickListener(_cb: Cb): void {
//
//     }
// }
//
// class Handler {
//     public info: string = '';
//
//     public onClick(this: Handler, _e: Event): void {
//         this.info = '_e.message';
//     }
// }

// const h = new Handler();
// const el = new UIElement();
// el.addClickListener(h.onClick);
