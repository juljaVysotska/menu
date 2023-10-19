import { DishItem } from "../../elements/DishItem";
import recipe from "../../data/recipe.json";
import { useSelector } from "react-redux";
import { selectDishes } from "../../store/slices/dishSlice";
import { Grid } from "@mui/material";

export const DishList = () => {
  const count = useSelector(selectDishes);

  const recipeJSX = recipe.map(el => {
    return (
      <Grid item xs={12} sm={4} md={3} key={el.id}>
        <DishItem
          id={el.id}
          dishName={el.recipeName}
          time={el.totalTime}
          servings={el.servings}
          cover={el.cover}
        />
      </Grid>
    );
  });

  console.log("count", count);

  return (
    <Grid container spacing={2}>
      {recipeJSX}
    </Grid>
  );
};
