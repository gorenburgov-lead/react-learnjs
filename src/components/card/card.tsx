import type { Restaurant } from "../types";
import "./card.css";

export const Card = ({ name, menu, reviews }: Omit<Restaurant, "id">) => {
  return (
    <>
      <h1>{name}</h1>
      <h3>Меню</h3>
      <ul>
        {menu.map((item) => (
          <li key={item.id}>
            <div>
              <span className="menu_item-name">{item.name}</span>-
              <span className="menu_item-price">{item.price}</span>
            </div>
            <div>
              <span className="menu_item-ingredients">
                {item.ingredients.join(", ")}
              </span>
            </div>
          </li>
        ))}
      </ul>
      <h3>Отзывы</h3>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <div>
              <span className="review-user">{review.user}</span>-
              <span className="review-rating">{review.rating}</span>
            </div>
            <div className="review-text">{review.text}</div>
          </li>
        ))}
      </ul>
    </>
  );
};
