const changeState = (selectedItem, item) => {
  return (selectedItem = item);
};

const idReducer = (state = {}, action) => {
  switch (action.type) {
    case "OPEN":
      return changeState(state, action.payload);

    default:
      return state;
  }
};

export default idReducer;
