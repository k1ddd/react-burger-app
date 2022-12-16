export const initialIngridients = {
  bacon: 0,
  cheese: 0,
  salad: 0,
  meat: 0,
  pickles: 0,
  arrayIngr: [],
};

export function reducerIngridients(state, action) {
  switch (action.name) {
    case "bacon":
      if (action.type === "add" && state.bacon < 5) {
        return {
          ...state,
          bacon: state.bacon + action.payload,
          arrayIngr: [...state.arrayIngr, action.name],
        };
      } else if (action.type === "remove" && state.bacon > 0) {
        const index = state.arrayIngr.lastIndexOf(action.name);

        state.arrayIngr.splice(index, 1);
        return {
          ...state,
          bacon: state.bacon + action.payload,
        };
      }
      return state;

    case "cheese":
      if (action.type === "add" && state.cheese < 5) {
        return {
          ...state,
          cheese: state.cheese + action.payload,
          arrayIngr: [...state.arrayIngr, action.name],
        };
      } else if (action.type === "remove" && state.cheese > 0) {
        const index = state.arrayIngr.lastIndexOf(action.name);

        state.arrayIngr.splice(index, 1);
        return {
          ...state,
          cheese: state.cheese + action.payload,
        };
      }
      return state;

    case "salad":
      if (action.type === "add" && state.salad < 5) {
        return {
          ...state,
          salad: state.salad + action.payload,
          arrayIngr: [...state.arrayIngr, action.name],
        };
      } else if (action.type === "remove" && state.salad > 0) {
        const index = state.arrayIngr.lastIndexOf(action.name);

        state.arrayIngr.splice(index, 1);
        return {
          ...state,
          salad: state.salad + action.payload,
        };
      }
      return state;

    case "pickles":
      if (action.type === "add" && state.pickles < 5) {
        return {
          ...state,
          pickles: state.pickles + action.payload,
          arrayIngr: [...state.arrayIngr, action.name],
        };
      } else if (action.type === "remove" && state.pickles > 0) {
        const index = state.arrayIngr.lastIndexOf(action.name);

        state.arrayIngr.splice(index, 1);
        return {
          ...state,
          pickles: state.pickles + action.payload,
        };
      }
      return state;

    case "meat":
      if (action.type === "add" && state.meat < 5) {
        return {
          ...state,
          meat: state.meat + action.payload,
          arrayIngr: [...state.arrayIngr, action.name],
        };
      } else if (action.type === "remove" && state.meat > 0) {
        const index = state.arrayIngr.lastIndexOf(action.name);

        state.arrayIngr.splice(index, 1);
        return {
          ...state,
          meat: state.meat + action.payload,
        };
      }
      return state;

    default:
      return state;
  }
}
