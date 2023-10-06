import { useSelector } from "react-redux";

export default function Cart() {
    const cart = useSelector(state => state);

    //reduce: 배열의 모든 요소를 더할 때 사용. 하나의 결과물 반환
    //const totalPrice = cart.reduce( (acc, curr) => acc + curr.price, 0)

    return (
        <div>
            <h2>장바구니</h2>
            {cart.map( (value) => (
                <div>
                    {value.name} : {value.price}
                    <button>제거</button>
                </div>
            ))}
            {/* 총 결제액: {totalPrice}원 */}
        </div>
    )
};