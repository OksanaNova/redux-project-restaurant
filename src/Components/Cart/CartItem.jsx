import dataDishes from "../../data/dataDishes"
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../redux/cartSlice";

const CartItem = ({cartElement}) => {
    console.log(cartElement)

    const filteredDishes = dataDishes.find(item => item.id === cartElement.dishId);
    const dispatch = useDispatch();
    // console.log(filteredDishes)

    return (
        <div>
            <p>{filteredDishes.name} - <span>{cartElement.quantity} portion(s)</span></p>
            <p>Price: ${filteredDishes.price * cartElement.quantity}</p>
            <span onClick={() => dispatch(removeItemFromCart({cartElementId: cartElement.id}))}>
                <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" alt="trash-icon" />
            </span>
            
        </div>
    )
}

export default CartItem