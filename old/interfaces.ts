// interface IPoint {
//     x: number;
//
//     getX(): number;
// }

interface IX {
    x: number;
}

interface IX {
    coord: { c: { y: number } };
}

interface IY {
    y: number;
}

type IPointGet = {
    coord: { c: { z: number } }
    getX(): number;
}

type c = { y: number } & { z: number };
let c: c = {y: 1, z: 1}

//type IPoint = IX & IPointGet & IY;

interface IPoint extends IX, IPointGet, IY {
    coord: { c: { y: number, z: number } };
}

class Point implements IPoint {
    public x = 1;
    public y = 1;
    public coord = {c: {y: 1, z: 1}};

    public getX(): number {
        return this.x;
    }
}









