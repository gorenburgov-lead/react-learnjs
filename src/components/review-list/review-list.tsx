import type { Review } from "../types";
import styles from "./review-list.module.css";

export const ReviewList = ({ items }: { items: Review[] }) => {
  return (
    <>
      <h3>Отзывы</h3>
      <ul>
        {items.map((review) => (
          <li key={review.id}>
            <div>
              <span className={styles.review_user}>{review.user}</span>-
              <span className={styles.review_rating}>{review.rating}</span>
            </div>
            <div className={styles.review_text}>{review.text}</div>
          </li>
        ))}
      </ul>
    </>
  );
};
