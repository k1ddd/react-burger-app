import onion from "../../../assets/onion.png";
import cheese from "../../../assets/cheese.png";
import tomato from "../../../assets/tomato.png";
import lettuce from "../../../assets/lettuce.png";
import meat from "../../../assets/meat.png";
import pickles from "../../../assets/pickles.png";

const RighAside = ({ setIngidients, ingidients }) => {
  const addIngridient = (e) => {
    setIngidients({
      type: "add",
      name: e.target.name,
      payload: 1,
    });
  };

  const removeIngridient = (e) => {
    setIngidients({
      type: "remove",
      name: e.target.name,
      payload: -1,
    });
  };

  return (
    <div className="right__aside">
      <div>
        <div className="btn__choice">
          <button name="onion" onClick={addIngridient} className="button">
            +
          </button>
          <span className="amount"> {ingidients.onion}</span>
          <button name="onion" onClick={removeIngridient} className="button">
            -
          </button>
          <img src={onion} className="ingredients" alt="Logo" />
        </div>
        <div className="btn__choice">
          <button name="tomato" onClick={addIngridient} className="button">
            +
          </button>
          <span className="amount"> {ingidients.tomato}</span>
          <button name="tomato" onClick={removeIngridient} className="button">
            -
          </button>
          <img src={tomato} className="ingredients" alt="Logo" />
        </div>

        <div className="btn__choice">
          <button name="cheese" onClick={addIngridient} className="button">
            +
          </button>
          <span className="amount"> {ingidients.cheese}</span>
          <button name="cheese" onClick={removeIngridient} className="button">
            -
          </button>
          <img src={cheese} className="ingredients" alt="Logo" />
        </div>

        <div className="btn__choice">
          <button name="salad" onClick={addIngridient} className="button">
            +
          </button>
          <span className="amount">{ingidients.salad}</span>
          <button name="salad" onClick={removeIngridient} className="button">
            -
          </button>
          <img src={lettuce} className="ingredients" alt="Logo" />
        </div>

        <div className="btn__choice">
          <button name="pickles" onClick={addIngridient} className="button">
            +
          </button>
          <span className="amount"> {ingidients.pickles} </span>
          <button name="pickles" onClick={removeIngridient} className="button">
            -
          </button>
          <img src={pickles} className="ingredients" alt="Logo" />
        </div>

        <div className="btn__choice">
          <button name="meat" onClick={addIngridient} className="button">
            +
          </button>
          <span className="amount">{ingidients.meat} </span>
          <button name="meat" onClick={removeIngridient} className="button">
            -
          </button>
          <img src={meat} className="ingredients" alt="Logo" />
        </div>
        <div className="clear">
          <button className="button btn__clear">Clear All</button>
        </div>
      </div>
    </div>
  );
};
export default RighAside;
