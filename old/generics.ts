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
