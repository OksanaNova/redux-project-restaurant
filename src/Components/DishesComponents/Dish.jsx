const Dish = ({dish}) => {
    return (
        <div className="dish">
            <img src={`${dish.img}.jpg`} alt={dish.img} />
            <h2>{dish.name}</h2>
            <p>$ {dish.price}</p>
            {/* TO FIX LATER */}
            <button>QUANTITY</button>
            <button>Add to cart</button>
        </div>
    )
}

export default Dish