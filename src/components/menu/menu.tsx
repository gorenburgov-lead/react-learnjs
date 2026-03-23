import { DishCounter } from "../dish-counter/dish-counter";
import type { MenuItem } from "../types";
import styles from "./menu.module.css";

export const Menu = ({ items }: { items: MenuItem[] }) => {
  return (
    <>
      <h3>Меню</h3>
      <ul>
        {items.map((item) => (
          <li className={styles.menu_item} key={item.id}>
            <div>
              <span className={styles.menu_item_name}>{item.name}</span>-
              <span className={styles.menu_item_price}>{item.price}</span>
            </div>
            <div>
              <span className={styles.menu_item_ingredients}>
                {item.ingredients.join(", ")}
              </span>
            </div>
            <DishCounter maxCount={5} />
          </li>
        ))}
      </ul>
    </>
  );
};
