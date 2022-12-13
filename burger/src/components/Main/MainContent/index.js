const MainContent = () => {
  return (
    <div className="main__content">
      <p className="burger__price">Burger price: 1.00 UAH</p>
      <div>
        <button className="button">Checkout</button>
      </div>
      <div className="box">
        <div className="bread__top">
          <div className="seeds"></div>
          <div className="seeds2"></div>
        </div>
        Please, start by adding products...
        <div className="bread__bottom"></div>
      </div>
    </div>
  );
};
export default MainContent;
