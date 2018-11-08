const changeState = (selectedItem, item) => {
  return (selectedItem = item);
};

const bestSellerReducer = (state = [], action) => {
  switch (action.type) {
    case "BEST_SELLER":
      return changeState(state, action.payload);

    default:
      return state;
  }
};

export default bestSellerReducer;
