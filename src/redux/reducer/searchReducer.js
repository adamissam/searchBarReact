import { SAVE_GIT_RESULT } from "../typeOfAction";

const initialState = {
  resultSearch: [],
};

const searchReudcer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_GIT_RESULT:
      if (!action || !action.value) {
        return state;
      }
      return { ...state, resultSearch: action.value };

    default:
      return state;
  }
};
export default searchReudcer;
