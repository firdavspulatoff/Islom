export const initialState = {
  user: {},
  isAuth: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH":
      return {
        ...state,
        isAuth: true,
        user: action.payload.user,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuth: false,
        user: {},
      };
    default:
      return state;
  }
};

export default userReducer;
