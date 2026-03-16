import type { Review } from "../types";

export const ReviewList = ({ items }: { items: Review[] }) => {
  return (
    <>
      <h3>Отзывы</h3>
      <ul>
        {items.map((review) => (
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
