import "./App.css";
import { restaurants } from "../../materials/mock";
import { RestaurantCard } from "./restaurant-card/restaurant-card";
import { Layout } from "./layout/layout";
import { useState } from "react";
import { RestaurantTab } from "./restaurant-tab/restaurant-tab";
export const App = () => {
  const [selected, setSelected] = useState(0);
  const { name, menu, reviews } = restaurants[selected];

  return (
    <Layout>
      <div className="tabs-container">
        {restaurants.map(({ name, id }, i) => (
          <RestaurantTab name={name} key={id} onClick={() => setSelected(i)} />
        ))}
      </div>
      <RestaurantCard name={name} menu={menu} reviews={reviews} />
    </Layout>
  );
};
