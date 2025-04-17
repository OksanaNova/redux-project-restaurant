import dataDishes from "../../data/dataDishes"

const CartItem = ({cartElement}) => {
    console.log(cartElement)

    const filteredDishes = dataDishes.find(item => item.id === cartElement.dishId)
    console.log(filteredDishes)

    return (
        <div>
            <p>{filteredDishes.name} - <span>{cartElement.quantity} portion(s)</span></p>
            <p>Price: ${filteredDishes.price * cartElement.quantity}</p>
        </div>
    )
}

export default CartItem