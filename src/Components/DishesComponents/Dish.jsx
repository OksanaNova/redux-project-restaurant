import { useState } from "react";
import ChangeQuantity from "../Cart/ChangeQuantity";

const Dish = ({dish}) => {

    const [quantity, setQuantity] = useState(1);

    return (
        <div className="dish">
            <img src={`${dish.img}.jpg`} alt={dish.img} />
            <h2>{dish.name}</h2>
            <p>$ {dish.price}</p>
            
            <ChangeQuantity 
            quantity={quantity}
            setQuantity={setQuantity}/>
            
            <button>Add to cart</button>
        </div>
    )
}

export default Dish