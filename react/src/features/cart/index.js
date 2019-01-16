import React from "react";
import { connect } from "react-redux";

function sort(items) {
  return items.sort((a, b) => a.id < b.id);
}

const returnPrice = items => {
  let total = 0;
  items.map(item => {
    total = total + item.price * item.quantity;
  });
  return total.toFixed(2);
};

function Cart(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th>Price</th>
          <th />
          <th />
        </tr>
      </thead>
      <tbody>
        {sort(props.cart).map(item => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>{item.price}</td>
            <td>
              <button onClick={() => props.addToCart(item)}>+</button>
            </td>
            <td>
              <button onClick={() => props.removeFormCart(item)}>-</button>
            </td>
            <td>
              <button onClick={() => props.removeAllFormCart(item)}>
                Removew all from cart
              </button>
            </td>
          </tr>
        ))}
        <tr>
          <td>total price : {returnPrice(props.cart)}</td>
        </tr>
      </tbody>
    </table>
  );
}

function mapStateToPros(state) {
  return {
    cart: state.cart
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: item => {
      dispatch({ type: "ADD", payload: item });
    },
    removeFormCart: item => {
      dispatch({ type: "REMOVE", payload: item });
    },
    removeAllFormCart: item => {
      dispatch({ type: "REMOVE_ALL", payload: item });
    }
  };
}

export default connect(
  mapStateToPros,
  mapDispatchToProps
)(Cart);
