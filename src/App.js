import { DishList } from "./components/DishList";
import { Container } from "@mui/material";

export const App = () => {
  return (
    <Container maxWidth={"lg"}>
      <DishList />
    </Container>
  );
};
