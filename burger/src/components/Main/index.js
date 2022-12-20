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
    onionSum: ingidients.onion * 0.45,
    tomatoSum: ingidients.tomato * 0.95,
    cheeseSum: ingidients.cheese * 1.2,
    saladSum: ingidients.salad * 0.45,
    meatSum: ingidients.meat * 1.75,
    picklesSum: ingidients.pickles * 0.85,
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
