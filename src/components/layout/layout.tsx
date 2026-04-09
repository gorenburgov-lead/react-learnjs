import { Authorization } from "../authorization/autorization";
import { LoremIpsum } from "../lorem/lorem";
import { ThemeButton } from "../theme-button/theme-button";

interface Props {
  children: React.ReactNode;
}
export const Layout = ({ children }: Props) => {
  return (
    <>
      <header>
        <Authorization />
        <ThemeButton />
        <h1>Заказ еды</h1>
      </header>
      {children}

      <footer>
        <h4>Контакты</h4>
      </footer>
      <LoremIpsum />
    </>
  );
};
