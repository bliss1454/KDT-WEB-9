//자바스크립트의 경우
// function jsFunc(a,b) {
//     console.log(a);
//     console.log(b);
// }
// jsFunc(1,2);

//타입스크립트의 경우
function tsFunc(a: number, b: number, c?: number) : number {
    return a + b;
};
tsFunc(1, 2, 3);
tsFunc(4, 5);
//함수표현식(화살표함수)
const arrowTsFunc = (a: number, b: number) : number => {
    return a+b;
};
//return이 생략된 함수
const arrowTsFunc2 = (a: number, b: number) : number => a * b;
//return이 없는 함수
function printFunc(a:string, b:string) : void {
    console.log(a,b)
};

/* ------------------------------------------ */
//never타입
//never : 특정 조건에서만 빠져나갈 수 있고, 어떤 조건에서는 무한루프
//항상 함수 끝에 도달하지 않는 경우도 있음.
// function goingOn(a : number) : never {
//     while(true) {
//         console.log('go');
//         // if( a > 10 ) break;
//     }
// };
// goingOn(1);

/* ------------------------------------------ */
//실습3
function sum1(a: number, b: number) : number {
    return a+b;
};
// console.log(sum1(5,11));
//실습4
function sum2(...rest : number[]) {
    const result = rest.reduce((acc, curr) => acc + curr , 0) //배열의 모든 합을 구해줌.
    return result
};
// console.log(sum2(1, 2, 3, 4, 10));