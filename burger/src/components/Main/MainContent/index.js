import { useState, useEffect } from "react";
import Ingridients from "../Ingridients/Ingridients";
import burger from "../../../assets/burger.png";

const MainContent = ({ ingidients, priceBurger }) => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 500);
  }, [load]);

  return (
    <div className="main__content">
      <p className="burger__price">Burger price: {priceBurger} UAH</p>
      <div></div>
      <div className="box">
        <div className="bread__top"></div>
        {ingidients.arrayIngr.length === 0 ? (
          <p>Please, start by adding products...</p>
        ) : (
          <Ingridients ingidients={ingidients} />
        )}
        <div className="bread__bottom"></div>
        {load ? (
          <div className="lds-dual-ring"></div>
        ) : (
          <button onClick={() => setLoad(true)} className="button btn">
            Order
            <img src={burger} className="burger" alt="Logo" />
          </button>
        )}
      </div>
    </div>
  );
};

export default MainContent;
