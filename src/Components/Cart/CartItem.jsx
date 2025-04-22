import dataDishes from "../../data/dataDishes"

const CartItem = ({cartElement}) => {
    console.log(cartElement)

    const filteredDishes = dataDishes.find(item => item.id === cartElement.dishId)
    console.log(filteredDishes)

    return (
        <div>
            <p>{filteredDishes.name} - <span>{cartElement.quantity} portion(s)</span></p>
            <p>Price: ${filteredDishes.price * cartElement.quantity}</p>
            <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" alt="trash-icon" />
        </div>
    )
}

export default CartItem