// action value
const CREATE_TODO = "CREATE_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const GET_DONE = "GET_DONE";
const TURN_BACK = "TURN_BACK";

// action creators
export const create_todo = (newTodo) => ({
  type: CREATE_TODO,
  payload: newTodo,
});

export const remove_todo = (id) => ({
  type: REMOVE_TODO,
  payload: id,
});

export const get_done = (id) => ({
  type: GET_DONE,
  payload: id,
});

export const turn_back = (id) => ({
  type: TURN_BACK,
  payload: id,
});

// 초기값
const initialState = [];

// reducer
const reducer_setData = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return [action.payload, ...state];
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    case GET_DONE:
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, isDone: true };
        }
        return todo;
      });
    case TURN_BACK:
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, isDone: false };
        }
        return todo;
      });
    default:
      return state;
  }
};
export default reducer_setData;
