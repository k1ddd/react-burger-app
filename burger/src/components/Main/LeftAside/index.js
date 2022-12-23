import axios from "axios";
import { useEffect, useState } from "react";

const LeftAside = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    try {
      axios
        .get("https://burger-api-xcwp.onrender.com/ingredients")
        .then((r) => setData(r.data));
    } catch(error) {}
  }, []);

  return (
    <div className="left__aside">
      <div>
        <h2>Our Price</h2>

        {data ? (
          data.map((e) => <p key={e._id}>{`${e.name}: ${e.price} UAH`}</p>)
        ) : (
          <div className="lds-dual-ring"></div>
        )}
      </div>
    </div>
  );
};

export default LeftAside;
