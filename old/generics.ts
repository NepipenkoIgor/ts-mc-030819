// type/interface/function/class

// interface IUser<Info extends { age: number } = { age: number }, Id = string> {
//     id: Id;
//     info: Info;
// }
//
// let user: IUser;
// let admin: IUser<{ age: number, user: typeof user }, number>;
//
//
// type ReadonlyType<T> = {
//     readonly [P in keyof T]?: T[P]
// }
//
//
// let user1: ReadonlyType<IUser> = {
//     id: '1'
// }
//
// user1.id = 1;
//
// let r: Readonly

// type TReturnType<T> = T extends () => infer R ? R : T;
//
//
// type fn = () => { age: number }
//
// let user: TReturnType<number> = 1;


// type Remove<T, U> = T extends U ? never : T;
// type IType = string | number | boolean
// let a: Remove<IType, boolean | string> =  1;
