const ChangeQuantity = ({quantity}) => {
    return (
        <div>

            <button onClick={addItem}>+</button>
            <span>{quantity}</span>
            <button onClick={removeItem}>-</button>
        </div>
    )
}

export default ChangeQuantity