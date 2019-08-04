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
