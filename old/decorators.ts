// function debounce(ms: number) {
//     let timeout: number | null;
//     return (_target: object, _key: string, descriptor: PropertyDescriptor) => {
//         return {
//             ...descriptor,
//             value: (...args: unknown[]) => {
//                 if (timeout) {
//                     clearTimeout(timeout);
//                     timeout = null;
//                 }
//                 timeout = setTimeout(() => {
//                     timeout = null;
//                     descriptor.value(...args);
//                 }, ms);
//             },
//         };
//     };
// }

function log(_target: object, key: string, descriptor: PropertyDescriptor) {
    return {
        ...descriptor,
        value: (...args: unknown[]) => {
            console.log(`Call ${key} with  ${args} `);
            return descriptor.value(...args);
        },
    };
}

function log1(_target: object, _key: string, descriptor: PropertyDescriptor) {
    return {
        ...descriptor,
        value: (..._args: unknown[]) => {
            console.log(`ChangeValue`);
            descriptor.value(..._args);
        },
    };
}

class MathLib {
    // @debounce(1000)
    @log1
    @log
    public getCount(_param1: number): void {
        console.log('hi debounce');
    }
}

let m = new MathLib();
// m.getCount(1);
// m.getCount(200);
// m.getCount(2);
// m.getCount(3030);
// m.getCount(393);
// m.getCount(1231);
console.log(m.getCount(3332));


function log(
    target: any,
    key: string,
    _descriptor: PropertyDescriptor,
) {
    console.log(Reflect.getMetadata('design:type', target, key));
    console.log(Reflect.getMetadata('design:paramtypes', target, key));
    console.log(Reflect.getMetadata('design:returntype', target, key));
}

class Demo {
    @log
    public sum(a: number, b: number): number {
        return a + b;
    }
}

new Demo();
