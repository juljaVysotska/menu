import { PropTypes } from "prop-types";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addDish, deleteDish } from "../../store/slices/dishSlice";

export const DishItem = ({ dishName, time, servings, cover, id }) => {
  const dispatch = useDispatch();
  const [isFavorite, setFavorite] = useState(false);

  useEffect(() => {
    if (isFavorite) {
      dispatch(
        addDish({
          dishId: id,
          name: dishName,
        }),
      );
    } else {
      dispatch(
        deleteDish({
          dishId: id,
        }),
      );
    }
  }, [isFavorite]);

  const handleClick = () => {
    setFavorite(!isFavorite);
  };

  return (
    <Card>
      <CardMedia sx={{ height: 140 }} image={cover} title="img title" />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={handleClick}>
          {isFavorite ? <BookmarkIcon /> : <BookmarkBorderIcon />}
        </IconButton>
      </CardActions>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {dishName}
        </Typography>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={0}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <AccessTimeIcon />
            <Typography variant="body2" color="text.secondary">
              {time}
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            <PersonOutlineIcon />
            <Typography variant="body2" color="text.secondary">
              {servings}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

DishItem.propTypes = {
  dishName: PropTypes.string,
  time: PropTypes.string,
  servings: PropTypes.number,
  cover: PropTypes.string,
  id: PropTypes.number,
};
