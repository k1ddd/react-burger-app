import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { Header, Main, Footer } from "./components/";
import Orders from "./components/Orders/Orders";
import Contacts from "./components/Contacts/Contacts";
import Faq from "./components/Faq/Faq";

import Forma from "./components/Forma/Forma";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  const [modal, setModal] = useState(false);
  const [modalIngr, setModalIngr] = useState({});
  const [burgerPrice, setBurgerPrice] = useState("");

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Footer />
            </>
          }
        >
          <Route
            index
            element={
              <>
                <Main
                  setModal={setModal}
                  setModalIngr={setModalIngr}
                  setBurgerPrice={setBurgerPrice}
                />

                {modal && (
                  <div className="modal">
                    <Forma
                      modalIngr={modalIngr}
                      burgerPrice={burgerPrice}
                      setModal={setModal}
                    />
                  </div>
                )}
              </>
            }
          />
          <Route path="orders" element={<Orders />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="faq" element={<Faq />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename="react-burger-app">
    <App />
  </BrowserRouter>
);
