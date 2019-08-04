// type TReturnType<T> = T extends () => infer R ? R : T;
//
//
// type fn = () => { age: number }
//
// let user: TReturnType<number> = 1;


type Remove<T, U> = T extends U ? never : T;
type IType = string | number | boolean
let a: Remove<IType, boolean | string> =  1;
