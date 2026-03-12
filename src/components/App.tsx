import "./App.css";
import { restaurants } from "../../materials/mock";
import { RestaurantCard } from "./restaurant-card/restaurant-card";
import { Layout } from "./layout/layout";
import { useState } from "react";
import { Tab } from "./tab/tab";
export const App = () => {
  const [selected, setSelected] = useState(restaurants[0].id);
  const { name, menu, reviews } =
    restaurants.find((restaurant) => restaurant.id === selected) ||
    restaurants[0];

  return (
    <Layout>
      <div className="tabs-container">
        {restaurants.map(({ name, id }) => (
          <Tab
            name={name}
            key={id}
            onClick={() => setSelected(id)}
            disabled={selected === id}
          />
        ))}
      </div>
      <RestaurantCard name={name} menu={menu} reviews={reviews} />
    </Layout>
  );
};
