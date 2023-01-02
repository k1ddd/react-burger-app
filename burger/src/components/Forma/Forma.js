import axios from "axios";
import { Formik, Field, Form } from "formik";
import "../../index.css";

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

      <ul>
        {modalIngr.onion > 0 && <li>onion: {modalIngr.onion}</li>}
        {modalIngr.tomato > 0 && <li>tomato: {modalIngr.tomato}</li>}
        {modalIngr.cheese > 0 && <li>cheese: {modalIngr.cheese}</li>}
        {modalIngr.salad > 0 && <li>salad: {modalIngr.salad}</li>}
        {modalIngr.meat > 0 && <li>meat: {modalIngr.meat}</li>}
        {modalIngr.pickles > 0 && <li>pickles: {modalIngr.pickles}</li>}
      </ul>

      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className="fields">
          <Field name="name" placeholder="Your name" />

          <Field name="mail" placeholder="Your mail" />

          <Field name="phone" placeholder="Your phone" />

          <Field name="address" placeholder="Your address" />

          <div>
            <button
              className="111"
              type="button"
              onClick={() => setModal(false)}
            >
              cancel
            </button>
            <button type="submit" onSubmit={handleSubmit}>
              order
            </button>
          </div>
        </Form>
      </Formik>
      <div className="totalPrice">
        total price:
        <h2>{burgerPrice}</h2>
      </div>
    </div>
  );
}
