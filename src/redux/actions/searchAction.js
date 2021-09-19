import { SAVE_GIT_RESULT } from "../typeOfAction";

/**
 * Action used to disconnect user
 */
export function searchUser(searchInformation) {
  return async (dispatch) => {
    try {
      if (searchInformation.trim() === "") {
        return null;
      }
      fetch(" https://api.github.com/search/users?q=" + searchInformation)
        .then(async (response) => {
          const data = await response.json();
          // check for error response
          if (!response.ok) {
            // get error message from body or default to response statusText
            dispatch(updateReducer([]));
          } else {
            dispatch(updateReducer(data.items));
          }
        })
        .catch((error) => {
          dispatch(updateReducer([]));
        });
    } catch (error) {
        dispatch(updateReducer([]));
    }
  };
}

/**
 * Action used to disconnect user
 */
export function updateReducer(data) {
  return async (dispatch) => {
    dispatch({
      type: SAVE_GIT_RESULT,
      value: data,
    });
  };
}
