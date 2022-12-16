import LeftAside from "./LeftAside/index";
import MainContent from "./MainContent/index";
import RighAside from "./RighAside/index";
import "./main.css";
import { useReducer } from "react";
import {
  reducerIngridients,
  initialIngridients,
} from "./Ingridients/reducerIngridients";
const Main = () => {
  const [ingidients, setIngidients] = useReducer(
    reducerIngridients,
    initialIngridients
  );

  const priceIngridients = {
    baconSum: ingidients.bacon * 0.75,
    cheeseSum: ingidients.cheese * 1.7,
    saladSum: ingidients.salad * 0.95,
    meatSum: ingidients.meat * 1.25,
    picklesSum: ingidients.pickles * 2,
  };

  const priceBurger =
    Math.round(
      Object.values(priceIngridients).reduce((a, c) => a + c, 1) * 100
    ) / 100;

  return (
    <div className="main">
      <LeftAside />
      <MainContent ingidients={ingidients} priceBurger={priceBurger} />
      <RighAside ingidients={ingidients} setIngidients={setIngidients} />
    </div>
  );
};

export default Main;
