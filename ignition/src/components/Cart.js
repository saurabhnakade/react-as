import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeLast } from "../utils/cartSlice";

const Cart = () => {
    const cartItems=useSelector(store=>store.cart.items);

    const dispatch=useDispatch()

    const clickHandler=()=>{
        dispatch(clearCart())
    }

    const clickHandler2=()=>{
        dispatch(removeLast())
    }

    return (
        <div className="p-5 m-5 bg-pink-50 rounded-lg shadow-lg text-center">
            <button className="p-4 rounded-lg font-bold bg-green-100 border mb-10" onClick={clickHandler}>Clear Cart</button>
            {cartItems.map((item)=><h2>{item}</h2>)}
            <button className="mt-10 p-4 rounded-lg font-bold bg-green-100 border mb-10" onClick={clickHandler2}>Remove Last</button>
        </div>
    );
};

export default Cart;
