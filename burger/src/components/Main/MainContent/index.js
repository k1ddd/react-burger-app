import Ingridients from "../Ingridients/Ingridients";

const MainContent = ({ ingidients, priceBurger }) => {
  return (
    <div className="main__content">
      <p className="burger__price">Burger price: {priceBurger} UAH</p>
      <div>
        <button className="button">Checkout</button>
      </div>
      <div className="box">
        <div className="bread__top">
        </div>
        {ingidients.arrayIngr.length === 0 ? (
          <p>Please, start by adding products...</p>
        ) : (
          <Ingridients ingidients={ingidients} />
        )}
        <div className="bread__bottom"></div>
      </div>
    </div>
  );
};
export default MainContent;
