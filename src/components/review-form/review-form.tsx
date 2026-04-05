import {
  useReducer,
  useState,
  type ChangeEventHandler,
  type ReactEventHandler,
  type SubmitEventHandler,
} from "react";
import { Counter } from "../counter/counter";

type State = {
  name: string;
  review: string;
  rating: number;
};

interface BaseAction {
  type: string;
}

interface ChangeFieldAction extends BaseAction {
  type: "SET_FIELD";
  field: string;
  value: string | number;
}

interface ResetAction extends BaseAction {
  type: "RESET";
  state: State;
}

interface SubmitAction extends BaseAction {
  type: "SUBMIT";
  payload: State;
}

type Action = ChangeFieldAction | ResetAction | SubmitAction;

const MAX_RATING = 7;

const initialState: State = { name: "", review: "", rating: 0 };

const reviewReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "RESET":
      return { ...action.state };
    case "SUBMIT":
      return state;
  }
};

export const ReviewForm = () => {
  const [rating, setRating] = useState(0);
  const [state, dispatch] = useReducer(reviewReducer, {
    ...initialState,
    rating,
  });

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch({
      type: "SET_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log(state);
    dispatch({ type: "SUBMIT", payload: state });
  };

  const handleReset: ReactEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch({ type: "RESET", state: initialState });
  };

  const handleDecrement = () => {
    dispatch({
      type: "SET_FIELD",
      field: "rating",
      value: state.rating > 0 ? state.rating - 1 : state.rating,
    });
  };
  const handleIncrement = () => {
    dispatch({
      type: "SET_FIELD",
      field: "rating",
      value: state.rating < MAX_RATING ? state.rating + 1 : state.rating,
    });
  }

  return (
    <form onSubmit={handleSubmit} onReset={handleReset}>
      <label>Имя</label>
      <input name="name" value={state.name} onChange={handleChange} />
      <label>Текст</label>
      <input name="review" value={state.review} onChange={handleChange} />
      <label>Рейтинг</label>
      <Counter
        increment={handleIncrement}
        decrement={handleDecrement}
        count={state.rating}
      />
      <button type="submit">Submit</button>
      <button type="reset">Clear</button>
    </form>
  );
};
