import React from "react";
import ProductListItem from "./product-list";
import { connect } from "react-redux";
import styled from "styled-components";

const BestSellers = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  section {
    display: flex;
    flex-direction: row;
    order: 1;
    flex-grow: 1;
    div {
      display: flex;
      flex-direction: column;
      order: 1;
      flex-grow: 1;
    }
  }
  section:nth-child(2) {
    background: green;
    padding: 0 2em;
  }
`;

const Background = styled.div`
  order: 1;
  flex-grow: 1;
  section {
    width: 100%;
    background: url("pictures/01.png") no-repeat center center;
    background-size: cover;
  }
`;

function ProductListing(props) {
  console.log(props);
  return (
    <BestSellers>
      <section>
        <Background>
          <ProductListItem
            key={props.products[1].id}
            product={props.products[1]}
            addToCart={props.addToCart}
            removeFromCart={props.removeFromCart}
            onOpenProduct={props.onOpenProduct}
            cartItem={
              props.cart.filter(
                cartItem => cartItem.id === props.products[1].id
              )[0]
            }
          />
          <ProductListItem
            key={props.products[2].id}
            product={props.products[2]}
            addToCart={props.addToCart}
            removeFromCart={props.removeFromCart}
            onOpenProduct={props.onOpenProduct}
            cartItem={
              props.cart.filter(
                cartItem => cartItem.id === props.products[2].id
              )[0]
            }
          />
          <ProductListItem
            key={props.products[3].id}
            product={props.products[3]}
            addToCart={props.addToCart}
            removeFromCart={props.removeFromCart}
            onOpenProduct={props.onOpenProduct}
            cartItem={
              props.cart.filter(
                cartItem => cartItem.id === props.products[3].id
              )[0]
            }
          />
        </Background>
        <Background>
          <ProductListItem
            key={props.products[4].id}
            product={props.products[4]}
            addToCart={props.addToCart}
            removeFromCart={props.removeFromCart}
            onOpenProduct={props.onOpenProduct}
            cartItem={
              props.cart.filter(
                cartItem => cartItem.id === props.products[4].id
              )[0]
            }
          />
          <ProductListItem
            key={props.products[0].id}
            product={props.products[0]}
            addToCart={props.addToCart}
            removeFromCart={props.removeFromCart}
            onOpenProduct={props.onOpenProduct}
            cartItem={
              props.cart.filter(
                cartItem => cartItem.id === props.products[0].id
              )[0]
            }
          />
        </Background>
      </section>
      <section>
        <p>m</p>
      </section>
      <section>
        <Background>
          <ProductListItem
            key={props.products[1].id}
            product={props.products[1]}
            addToCart={props.addToCart}
            removeFromCart={props.removeFromCart}
            onOpenProduct={props.onOpenProduct}
            cartItem={
              props.cart.filter(
                cartItem => cartItem.id === props.products[1].id
              )[0]
            }
          />
          <ProductListItem
            key={props.products[2].id}
            product={props.products[2]}
            addToCart={props.addToCart}
            removeFromCart={props.removeFromCart}
            onOpenProduct={props.onOpenProduct}
            cartItem={
              props.cart.filter(
                cartItem => cartItem.id === props.products[2].id
              )[0]
            }
          />
          <ProductListItem
            key={props.products[3].id}
            product={props.products[3]}
            addToCart={props.addToCart}
            removeFromCart={props.removeFromCart}
            onOpenProduct={props.onOpenProduct}
            cartItem={
              props.cart.filter(
                cartItem => cartItem.id === props.products[3].id
              )[0]
            }
          />
        </Background>
        <Background>
          <ProductListItem
            key={props.products[4].id}
            product={props.products[4]}
            addToCart={props.addToCart}
            removeFromCart={props.removeFromCart}
            onOpenProduct={props.onOpenProduct}
            cartItem={
              props.cart.filter(
                cartItem => cartItem.id === props.products[4].id
              )[0]
            }
          />
          <ProductListItem
            key={props.products[0].id}
            product={props.products[0]}
            addToCart={props.addToCart}
            removeFromCart={props.removeFromCart}
            onOpenProduct={props.onOpenProduct}
            cartItem={
              props.cart.filter(
                cartItem => cartItem.id === props.products[0].id
              )[0]
            }
          />
        </Background>
      </section>
    </BestSellers>
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
