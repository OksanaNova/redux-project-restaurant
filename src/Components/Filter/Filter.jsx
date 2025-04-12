import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/dishesSlice";

const Filter = ({category}) => {

    const selectedCategory = useSelector(getSelectedCategory);


    return (
        <div className="category">
            <p className={selectedCategory === category ? 'categoryButtonSelected categoryButton' : 'categoryButton' }>{category}</p>
        </div>
    )
}

export default Filter