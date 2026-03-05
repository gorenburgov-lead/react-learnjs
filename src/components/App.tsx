import "./App.css";
import { restaurants } from "../../materials/mock";
import { RestaurantCard } from "./restaurant-card/restaurant-card";
export const App = () => {
  return (
    <ul>
      {restaurants.map(({ name, menu, reviews, id }) => (
        <li>
          <RestaurantCard
            key={id}
            name={name}
            menu={menu}
            reviews={reviews}
          ></RestaurantCard>
        </li>
      ))}
    </ul>
  );
};
