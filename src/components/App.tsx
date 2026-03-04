import "./App.css";
import { restaurants } from "../../materials/mock";
import type { RestaurantsList } from "./types";
import { Card } from "./card/card";
export const App = () => {
  const restaurantsList = (restaurants as RestaurantsList).map(
    ({ name, menu, reviews, id }) => (
      <li>
        <Card key={id} name={name} menu={menu} reviews={reviews}></Card>
      </li>
    ),
  );

  return <ul>{restaurantsList}</ul>;
};
