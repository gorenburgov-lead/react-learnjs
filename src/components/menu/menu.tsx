import { Counter } from "../counter/counter";
import type { MenuItem } from "../types";
import "./menu.css";

export const Menu = ({ items }: { items: MenuItem[] }) => {
  return (
    <>
      <h3>Меню</h3>
      <ul>
        {items.map((item) => (
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
            <Counter maxCount={5} />
          </li>
        ))}
      </ul>
    </>
  );
};
