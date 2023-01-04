import axios from "axios";
import { Formik, Field, Form } from "formik";
import "../../index.css";
import onion from "../../assets/onion.png";
import cheese from "../../assets/cheese.png";
import tomato from "../../assets/tomato.png";
import lettuce from "../../assets/lettuce.png";
import meat from "../../assets/meat.png";
import pickles from "../../assets/pickles.png";

export default function Forma({ modalIngr, burgerPrice, setModal }) {
  const initialValues = {
    name: "",
    mail: "",
    phone: "",
    address: "",
  };

  const handleSubmit = (e) => {
    const order = {
      orderName: e.name,
      orderPhone: e.phone,
      orderFast: false,
      orderAddress: e.address,
      orderProducts: {
        cheese: modalIngr.onion,
        meat: modalIngr.tomato,
        onion: modalIngr.cheese,
        pickles: modalIngr.salad,
        salad: modalIngr.meat,
        tomato: modalIngr.pickles,
      },
      orderedPrice: burgerPrice,
    };

    try {
      axios
        .post("https://burger-api-xcwp.onrender.com/orders", order)
        .then((r) => {
          if (r.data === "item saved to database") {
            alert(r.data);
          } else {
            alert("Fail, try again");
          }
        });
    } catch (error) {
      alert(`${error}`);
    }

    setModal(false);
  };

  return (
    <div className="forma">
      <h1>Order</h1>

      <ul className="order__list">
        {modalIngr.onion > 0 && (
          <li>
            <img src={onion} className="ingredients" alt="Logo" />
            {modalIngr.onion}
          </li>
        )}
        {modalIngr.tomato > 0 && (
          <li>
            <img src={tomato} className="ingredients" alt="Logo" />
            {modalIngr.tomato}
          </li>
        )}
        {modalIngr.cheese > 0 && (
          <li>
            <img src={cheese} className="ingredients" alt="Logo" />
            {modalIngr.cheese}
          </li>
        )}
        {modalIngr.salad > 0 && (
          <li>
            <img src={lettuce} className="ingredients" alt="Logo" />
            {modalIngr.salad}
          </li>
        )}
        {modalIngr.meat > 0 && (
          <li>
            <img src={meat} className="ingredients" alt="Logo" />
            {modalIngr.meat}
          </li>
        )}
        {modalIngr.pickles > 0 && (
          <li>
            <img src={pickles} className="ingredients" alt="Logo" />
            {modalIngr.pickles}
          </li>
        )}
      </ul>

      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className="fields">
          <Field name="name" placeholder="Your name" />
          <Field name="mail" placeholder="Your mail" />
          <Field name="phone" placeholder="Your phone" />
          <Field name="address" placeholder="Your address" />

          <div className="order__btn">
            <button
              className="order__and__cancel"
              type="button"
              onClick={() => setModal(false)}
            >
              cancel
            </button>
            <button
              className="order__and__cancel"
              type="submit"
              onSubmit={handleSubmit}
            >
              order
            </button>
          </div>
        </Form>
      </Formik>
      <div className="totalPrice">
        Total price:
        <h2 className="orderBurgerPrice">{burgerPrice} UAH</h2>
      </div>
    </div>
  );
}
