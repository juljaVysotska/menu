import { PropTypes } from "prop-types";
import { useDispatch } from "react-redux";
import { addDish } from "../../store/slices/dishSlice";

export const DishItem = ({ name, time }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      addDish({
        name: name,
      }),
    );
  };

  return (
    <div>
      <h2>{name}</h2>
      <p>{time}</p>
      <button onClick={handleClick}>Add to fav</button>
    </div>
  );
};

DishItem.propTypes = {
  name: PropTypes.string,
  time: PropTypes.string,
};
