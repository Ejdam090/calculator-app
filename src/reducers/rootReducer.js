import {
  ADD,
  SUBTRACT,
  MULTIPLY,
  DIVIDE,
  UPDATE,
  CLEAR,
  EQUAL,
  DELL
} from "../actions/actionTypes";
import * as math from "mathjs";

const initialState = {
  display: "0",
  prevOP: "",
  accumulated: "0",
  history: "0",
};

export default function foo(state = initialState, action) {
  switch (action.type) {

    case UPDATE: {
      const updateDisplay = action.payload;
      if (
        (state.display.includes(".") && updateDisplay.input === ".") ||
        state.display.length > 8
      ) {
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          display:
            state.display === "0" || state.prevOP === "operator"
              ? updateDisplay.input
              : state.display + updateDisplay.input,
          prevOP: updateDisplay.operation,
        }
      }
    }   
        case DELL:{
            return{
                ...state,
                display: state.display === '0' || state.prevOP ==='operator'
                ? state.display : state.display.slice(0, state.display.length - 1),
                history: state.display,
                prevOP: 'operator'
            }
        }
    case ADD: {
      const history = () =>
        state.prevOP === "operator"
          ? state.history.slice(0, state.history.length - 4)
          : state.history;
      return {
        ...state,
        display: state.display,
        history:
          state.history === "0" && state.accumulated === "0"
            ? state.display + "+"
            : state.accumulated !== "0"
            ? state.accumulated + "+"
            : history() + state.display + "+",
        prevOP: "operator",
      }
    }
    case SUBTRACT: {
      const history = () =>
        state.prevOP === "operator"
          ? state.history.slice(0, state.history.length - 4)
          : state.history;

      return {
        ...state,
        display: state.display,
        history:
          state.history === "0" && state.accumulated === "0"
            ? state.display + "-"
            : state.accumulated !== "0"
            ? state.accumulated + "-"
            : history() + state.display + "-",
        prevOP: "operator",
      }
    }
    case MULTIPLY: {
      const history = () =>
        state.prevOP === "operator"
          ? state.history.slice(0, state.history.length - 4)
          : state.history;

      return {
        ...state,
        display: state.display,
        history:
          state.history === "0" && state.accumulated === "0"
            ? state.display + "*"
            : state.accumulated !== "0"
            ? state.accumulated + "*"
            : history() + state.display + "*",
        prevOP: "operator",
      }
    }

    case DIVIDE: {
      const history = () =>
        state.prevOP === "operator"
          ? state.history.slice(0, state.history.length - 4)
          : state.history;

      return {
        ...state,
        display: state.display,
        history:
          state.history === "0" && state.accumulated === "0"
            ? state.display + "/"
            : state.accumulated !== "0"
            ? state.accumulated + "/"
            : history() + state.display + "/",
        prevOP: "operator",
      }
    }
    case CLEAR: {
      return {
        ...state,
        display: "0",
        prevOP: "clear",
        accumulated: '0',
        history: "0"
      }
    }
    case EQUAL: {
      let states = state.history + state.display;
      let maths = math.evaluate(states);

      if (state.prevOP === "equal") {
        return {
          ...state,
        }
      } else {
        return {
          ...state,
          history: math.round(maths, 4).toString(),
          display: math.round(maths, 4).toString(),
          accumulated: maths.toString(),
          prevOP: "equal",
        }
      }
    }

    default:
      return state;
  }
}
