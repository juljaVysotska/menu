import { DishItem } from "../../elements/DishItem";
import recipe from "../../data/recipe.json";
import { useSelector } from "react-redux";
import { selectDishes } from "../../store/slices/dishSlice";

export const DishList = () => {
  const count = useSelector(selectDishes);

  const recipeJSX = recipe.map(el => {
    return <DishItem key={el.id} name={el.recipeName} time={el.totalTime} />;
  });

  console.log("count", count);

  return (
    <div>
      <p>count{JSON.stringify(count)}</p>
      <div>{recipeJSX}</div>
    </div>
  );
};
