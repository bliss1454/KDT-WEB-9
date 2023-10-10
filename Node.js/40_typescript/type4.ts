//generic
let value: string | number ='안녕하세요';
value = 1000;
//함수에 모든 값이 들어 올 수 있다 => 제네릭 타입 사용하면 됌.
function getValue(val: string | number | object) : string | number | object {
    return val;
}
getValue("hi")
//제네릭 타입으로 변경
function getValue2<T> (value: T) : T {
    return value;
};
// console.log(getValue2<string>('안녕하세요'));
// console.log(getValue2<number>(100));

// function arrLength<T>(arr: T[]) {
//         return arr.length;
// };
// console.log(arrLength<string>(['a','b','c']));
// console.log(arrLength<number>([1,2,3,4,5]));

function printFunc<T>(x: T, y: T) : T {
    // console.log(x);
    // console.log(y);
    return x;
}
// console.log(printFunc<string>('hi','hello'))

/* ----------------------------------- */
//실습5
function arrElement<T>(arr: T[], idx: number) {
    if(idx > arr.length -1 ) {
        return false;
    } else {
        return arr[idx];
    }
};
console.log(arrElement<string>(['a','b','c'],4));
