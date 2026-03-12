interface Props {
  children: React.ReactNode;
}
export const Layout = ({ children }: Props) => {
  return (
    <>
      <header>
        <h1>Заказ еды</h1>
      </header>
      {children}
      <footer>
        <h4>Контакты</h4>
      </footer>
    </>
  );
};
