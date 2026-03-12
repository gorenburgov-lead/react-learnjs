import "./restaurant-tab.css";
interface Props {
  name: string;
  onClick: () => void;
}
export const RestaurantTab = ({ name, onClick }: Props) => {
  return (
    <div className="tab" onClick={onClick}>
      {name}
    </div>
  );
};
