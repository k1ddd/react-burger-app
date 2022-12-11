import "./main.css";
import bacon from "../../assets/bacon.png";
import cheese from "../../assets/cheese.png";
import lettuce from "../../assets/lettuce.png";
import meat from "../../assets/meat.png";
import pickles from "../../assets/pickles.png";

const Main = () => {
  return (
    <div className="main">
      <div className="left__aside">
        <div>
          <h2>Our Price</h2>
          <p>Bacon: 0.75 UAH</p>
          <p>Cheese: 1.7 UAH</p>
          <p>Salad: 0.95 UAH</p>
          <p>Pickle: 1.25 UAH</p>
          <p>Meat: 2 UAH</p>
        </div>
      </div>
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
      <div className="right__aside">
        <div>
          <div className="btn__choice">
            <button className="button">+</button>
            <span className="amount"> 0 </span>
            <button className="button">-</button>
            <img src={bacon} className="ingredients" alt="Logo" />
          </div>

          <div className="btn__choice">
            <button className="button">+</button>
            <span className="amount"> 0 </span>
            <button className="button">-</button>
            <img src={cheese} className="ingredients" alt="Logo" />
          </div>
          <div className="btn__choice">
            <button className="button">+</button>
            <span className="amount">0 </span>
            <button className="button">-</button>
            <img src={lettuce} className="ingredients" alt="Logo" />
          </div>
          <div className="btn__choice">
            <button className="button">+</button>
            <span className="amount"> 0 </span>
            <button className="button">-</button>
            <img src={pickles} className="ingredients" alt="Logo" />
          </div>
          <div className="btn__choice">
            <button className="button">+</button>
            <span className="amount">0 </span>
            <button className="button">-</button>
            <img src={meat} className="ingredients" alt="Logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
