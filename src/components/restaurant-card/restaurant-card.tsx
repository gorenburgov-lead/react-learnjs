import { Menu } from "../menu/menu";
import { ReviewList } from "../review-list/review-list";
import type { Restaurant } from "../types";
import "./restaurant-card.css";

export const RestaurantCard = ({
  name,
  menu,
  reviews,
}: Omit<Restaurant, "id">) => {
  return (
    <>
      <h2>{name}</h2>
      <Menu items={menu} />
      <ReviewList items={reviews} />
    </>
  );
};
