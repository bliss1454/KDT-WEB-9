// 변수란 특정 값을 저장하는 공간
// abc = "abcdefg~~~"

// 키워드 변수이름 = 값
// 키워드 : var, let, const

var number = 5; // 변수의 선언과 할당이 동시에
var number;

//var보다는 let을 권장한다.
for () {

}

//function aaa() {
  //  let string="가나다"
//}

//console.log(string)

var number1; //변수를 선언
number1 = 5; // 변수에 값을 할당한다
number1= 6;

// let string = "가나다";
// string = "라마바"
// let string = "라마바" (재선언 불가능)

// const string2 = "가가가"
// string2 = "aaa"
console.log(string2)

// var let const
// var : 재선언, 재할당
// let : 재선언 불가능, 재할당 가능
// const : 재선언 불가능, 재할당 불가능

let lll;
console.log(111)

let fistName = "";
let name1 = "";

const variable = 1; //상수

// 문자열 선언 및 할당
var number = 1;
var string = "aaaa";
var string = "1";
var string = `1abc2`

var number = 5;
console.log(string + number);

let name = `lily`
let hihi = `안녕하세요 ${name}입니다.`
console.log(`안녕하세요 ${name}입니다.`)
// ' ' , " " , ` `

let name1 = ""

let names = ["홍길동" , "성춘향" , "짱구"];
// 인덱싱 : 번호를 매기는 행위
// 인덱스 : 0부터 시작 !!!!!!
console.log( names[0] )
console.log( names[1] )
console.log( names[2] )

console.log(names.length);
//배열의 길이를 출력, 배열의 길이 -> 배열 안에 저장되어 있는 값의 개수

names.push("짱아"); //배열의 마지막에 값을 추가하는 기능
// names = ["홍길동" , "성춘향" , "짱구" , "짱아"];
console.log("push" , names);

names.pop() //배열의 가장 마지막 값을 삭제
// names = ["홍길동" , "성춘향" ];
console.log("pop" , names)

names.unshift() //배열의 제일 앞에 값을 추가하는 기능
names.unshift("신형만") //배열의 제일 앞에 값을 추가하는 기능
// names = ["신형만", "홍길동" , "성춘향" , "짱구"];
names.shift() //배열의 제일 앞에 값을 삭제
// names = ["홍길동" , "성춘향" , "짱구"];
console.log("shift" , names)

let index=names.indexOf("짱구") //배열 안에 "짱구"가 몇번 인덱스에 위치해 있는지 알려줌
//만약 값이 없을 경우엔, -1이 출력됨
console.log(index);

let isIncludes = names.includes("짱아") //값이 포함되어 있는지 판별하는 기능
console.log(isIncludes);