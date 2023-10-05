import { useContext } from "react"
import CartContext from "./store/cart-context"

export default function CartItem() {
    const {cart,setCart} = useContext(CartContext);
    
    const removeCart = (id) => { 
        const newCart = cart.filter((item) => item.id !== id);
        setCart(newCart); // 새로운 배열을 setCart로 업데이트합니다.
        // setCart{cart.filter((e).mart => element.id !== id) }
    }
    
    return (
        <div>
            <span>
                {value.name} : {value.price}원
            </span>
            <button onClick={()=> removeCart(value.id)}>제거</button>
        </div>
    )
}