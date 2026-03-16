import { useState } from "react";
import { restaurants } from "../../../materials/mock";
import { RestaurantCard } from "../restaurant-card/restaurant-card";
import { Tab } from "../tab/tab";
export const RestaurantDashboard = () => {
  const [selectedTabId, setSelectedTabId] = useState(restaurants[0].id);
  const { name, menu, reviews } =
    restaurants.find((restaurant) => restaurant.id === selectedTabId) ||
    restaurants[0];
  return (
    <>
      <div className="tabs-container">
        {restaurants.map(({ name, id }) => (
          <Tab
            name={name}
            key={id}
            onClick={() => setSelectedTabId(id)}
            disabled={selectedTabId === id}
          />
        ))}
      </div>
      <RestaurantCard name={name} menu={menu} reviews={reviews} />
    </>
  );
};
