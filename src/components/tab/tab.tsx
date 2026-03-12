import "./tab.css";
interface Props {
  name: string;
  onClick: () => void;
  disabled?: boolean;
}
export const Tab = ({ name, onClick, disabled = false }: Props) => {
  const handleTab = () => !disabled && onClick();
  return (
    <div className={`tab${disabled ? " disabled" : ""}`} onClick={handleTab}>
      {name}
    </div>
  );
};
