import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { getCartItems } from "../../redux/cartSlice";

const Cart = () => {

    const cartItems = useSelector(getCartItems);

    return (
        <div>
            <img className="cartIcon" src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/000000/external-shopping-cart-cyber-monday-xnimrodx-lineal-color-xnimrodx.png " alt="cart-icon" />
            {cartItems.map(cartElement => <CartItem cartElement={cartElement} />)}
        </div>
    )
}

export default Cart