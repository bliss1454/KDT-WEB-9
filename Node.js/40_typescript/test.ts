//타입스크립트의 기본형
let ab: string = 'hi';
let b: number = 1;
let c: boolean = true;
let d: object = {
    name: "bliss",
    age: 25,
};
console.log(b, c , d);
//타입스크립를 쓰는 이유 ?
//1) js로 실행 시 타입 체크가 없어 의도와 다른 방식으로 쓰일 수 있음.
//2) 정적파일언어이기 때문에 실행하지 않고 코드 상의 에러를 실시간으로 알려준다(디버깅이 가능하다).

//배열
let arr : string[] = ["hi","bye"];
let numArr : number[] = [1,2,3,4,5];

//객체
let person: {
    name: string;
    age: number;
}[];
person = [
    {
        name: 'bliss',
        age: 25,
    },
];