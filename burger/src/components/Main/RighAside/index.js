import bacon from "../../../assets/bacon.png";
import cheese from "../../../assets/cheese.png";
import lettuce from "../../../assets/lettuce.png";
import meat from "../../../assets/meat.png";
import pickles from "../../../assets/pickles.png";

const RighAside = () => {
  return (
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
  );
};
export default RighAside;
