import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { Header, Main, Footer } from "./components/";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
