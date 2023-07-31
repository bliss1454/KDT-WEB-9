//setTimeout()
//setTimeout(code, delay) : delay동안 기다리다가 code를 실행함

// console.log(1);
// setTimeout( () => {
//     console.log(2);
// }, 2000);
// console.log(3);

//편의점에 들어가서 음료수를 사고 나오는 상황(callback함수로 문제해결)

function goMart() {
    console.log('마트에 가서 어떤 음료를 살지 고민한다')
}

function pickDrink(callback) {
    setTimeout( () => {
        console.log('고민 끝');
        product = '제로 콜라';
        price = 2000;
        callback(product, price);
    }, 3000)
}

// function pay(product, price) {
//     console.log(`상품명: ${product}, 가격: ${price}`);
// }

let product;
let price;
goMart();
pickDrink(function(product, price) {
    console.log(`상품명: ${product}, 가격: ${price}`);
    //함수 안에 함수의 형태로 콜백함수 선언
});
//pay(product, price);


//callback함수 : 함수 타입 파라미터 맨 마지막에 하나 더 선언해주는 형식임
// function mainFunc(param1, param2, callback) {
//     console.log(param1, param2);
//     callback();
// }

// function callbackFunc(param) {
//     console.log('콜백함수 입니다');
// }

// mainFunc(1, 2, callbackFunc);