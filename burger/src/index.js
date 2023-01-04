import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { Header, Main, Footer } from "./components/";
import Forma from "./components/Forma/Forma";

const App = () => {
  const [modal, setModal] = useState(false);
  const [modalIngr, setModalIngr] = useState({});
  const [burgerPrice, setBurgerPrice] = useState("");

  return (
    <div className="App">
      <Header />
      <Main
        setModal={setModal}
        setModalIngr={setModalIngr}
        setBurgerPrice={setBurgerPrice}
      />
      <Footer />
      {modal && (
        <div className="modal">
          <Forma
            modalIngr={modalIngr}
            burgerPrice={burgerPrice}
            setModal={setModal}
          />
        </div>
      )}
    </div>
  );
};

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
