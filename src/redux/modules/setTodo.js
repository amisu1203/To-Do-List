// action value
const SET_TITLE = "SET_TITLE";
const SET_CONTENT = "SET_CONTENT";
const RESET = "RESET";

// action creators
export const set_title = (e) => {
  return { type: SET_TITLE, payload: e.target.value };
};
export const set_content = (e) => {
  return { type: SET_CONTENT, payload: e.target.value };
};
export const reset = () => {
  return { type: RESET };
};

// 초기값 설정
const initialState = {
  title: "",
  content: "",
  isDone: false,
};

// reducer
const reducer_setTodo = (state = initialState, action) => {
  switch (action.type) {
    case SET_TITLE:
      return { ...state, title: action.payload };
    case SET_CONTENT:
      return { ...state, content: action.payload };
    case RESET:
      return initialState;
    default:
      return state;
  }
};

export default reducer_setTodo;
