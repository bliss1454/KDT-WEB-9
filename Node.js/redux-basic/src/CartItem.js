import { useDispatch } from "react-redux";
import { DELETE_TODO } from "./store/todo";

export default function CartItem() {
    const dispatch = useDispatch();

    const removeCart = (id) => { 
        dispatch({type: REMOVE_TODO}, id)    
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