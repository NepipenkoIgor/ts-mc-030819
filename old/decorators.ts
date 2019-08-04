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


import 'reflect-metadata';

interface IRangeMetadata {
    [key: string]: [number, number];
}

const RANGE_KEY = 'RANGE_KEY';

function Range(min: number = 0, max: number = 100) {
    return (
        target: any,
        key: string,
        parameterIndex: number,
    ) => {
        const existingRange: IRangeMetadata = Reflect.getMetadata(RANGE_KEY, target, key) || {};
        existingRange[parameterIndex] = [min, max];
        Reflect.defineMetadata(RANGE_KEY, existingRange, target, key);
    };
}

/**
 *
 *    {
 *        '1': [0,100]
 *    }
 *
 *
 * **/

function Validate(
    target: any,
    key: string,
    descriptor: PropertyDescriptor,
) {
    const savedValue = descriptor.value;

    descriptor.value = (...args: number[]) => {
        const monitoredRange: IRangeMetadata = Reflect.getMetadata(RANGE_KEY, target, key) || {};
        for (const parameterIndex of Object.keys(monitoredRange)) {
            const [min, max] = monitoredRange[parameterIndex];
            const value = args[Number(parameterIndex)];
            if (value < min || value > max) {
                throw new Error(`Parameter of method ${key} on position ${parameterIndex} out of range [${min}, ${max}].
                Current value ${value}`);
            }
        }
        return savedValue(...args);
    };
}

class Math {
    @Validate
    public updatePercentage(
        @Range(0, 99)oldValue: number,
        @Range(0, 100) newValue: number,
    ) {
        console.log(oldValue, newValue);
    }
}

const m = new Math();
m.updatePercentage(100, 50);

setTimeout(() => {
    m.updatePercentage(100, 150);
}, 5000);

