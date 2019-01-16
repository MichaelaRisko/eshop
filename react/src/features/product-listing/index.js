import React from "react";
import ProductListItem from "./product-list-item";
import { connect } from "react-redux";


function ProductListing(props) {
  return (
    <div className="product-listing">
      {props.products.map(product => (
        <ProductListItem
          key={product.id}
          product={product}
          addToCart={props.addToCart}
          removeFromCart={props.removeFromCart}
          onOpenProduct={props.onOpenProduct}
          cartItem={
            props.cart.filter(cartItem => cartItem.id === product.id)[0]
          }
        />
      ))}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
    id: state.id
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: item => {
      dispatch({ type: "ADD", payload: item });
    },

    removeFromCart: item => {
      dispatch({ type: "REMOVE", payload: item });
    },

    onOpenProduct: item => {
      dispatch({ type: "OPEN", payload: item });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListing);
