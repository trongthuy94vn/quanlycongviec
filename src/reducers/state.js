export const initialState = {
  isEdit: false,
  isShow: false
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SHOW_FORM":
      return { ...state, isShow: !state.isShow };
    case "CLOSE_FORM":
      return initialState;
    case "EDIT_TASK":
      return { ...state, isEdit: true, isShow: true };
    default:
      return initialState;
  }
};
