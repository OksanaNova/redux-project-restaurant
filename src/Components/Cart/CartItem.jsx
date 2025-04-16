import dataDishes from "../../data/dataDishes"

const CartItem = ({cartElement}) => {
    console.log(cartElement)

    const filteredDishes = dataDishes.find(item => item.id === cartElement.dishId)
    console.log(filteredDishes)

    return (
        <div>
            <p>{filteredDishes.name}</p>
            <p>{cartElement.quantity} portion(s)</p>
        </div>
    )
}

export default CartItem