import { useContext } from "react";
import { Menu } from "../menu/menu";
import { ReviewForm } from "../review-form/review-form";
import { ReviewList } from "../review-list/review-list";
import type { Restaurant } from "../types";
import "./restaurant-card.css";
import { AuthorizationContext } from "../authorization-provider";

export const RestaurantCard = ({
  name,
  menu,
  reviews,
}: Omit<Restaurant, "id">) => {
  const { isAuthorized } = useContext(AuthorizationContext);
  return (
    <>
      <h2>{name}</h2>
      <Menu items={menu} />
      <ReviewList items={reviews} />
      {isAuthorized && <ReviewForm />}
    </>
  );
};
