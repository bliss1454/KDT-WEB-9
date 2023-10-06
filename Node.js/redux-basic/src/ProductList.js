import { useDispatch } from "react-redux";
import { ADD_CART } from "./store/cart";

export default function ProductList() {

    const products = [
        {
            id: 1,
            name: '둘리',
            price: 1000
        },
        {
            id: 2,
            name: '미니언즈',
            price: 1700
        },
        {
            id: 3,
            name: '으르렁',
            price: 3000
        }
    ];

    const dispatch = useDispatch();

    const addProduct = (product) => {
        dispatch( {type: ADD_CART , product} )
    }

    return (
    <div>
        <h2>상품리스트</h2>
        {products.map(value => {
            return (
            <div key={value.id}>
                <span>{value.name} : {value.price}원 
                </span>
                <button onClick={ () => addProduct(value) }>장바구니에 추가</button>
            </div>
            )
        })}
    </div>
    )
}