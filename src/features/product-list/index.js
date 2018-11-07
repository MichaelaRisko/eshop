import React from "react";
import ProductListItem from "./product-list";
import { connect } from "react-redux";
import styled from "styled-components";

const Products = styled.div`
  margin: 3em;
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;
const BestSellers = styled.div`
  width: 100%;
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

  section {
    max-height: 50vw;
    min-height: 50vw;
  }

  section:nth-child(2) {
    max-width: 25%;
  }
`;

const Background = styled.div`
  order: 1;
  flex-grow: 1;
  width: auto;
`;

function ProductListing(props) {
  let visibility = true;
  const restore = num => {
    if (num > 1) {
      visibility = false;
    }
    console.log(num);
  };
  const array = [1, 2, 3, 4, 0, 1, 1, 2, 3, 4, 0];
  return (
    <Products>
      <h2>#bestsellers</h2>
      <div className="row">
        <h6 onClick={() => props.onClickBestSeller("featured")}>featured</h6>
        <h6 onClick={() => props.onClickBestSeller("new arrivals")}>
          new arrivals
        </h6>
        <h6 onClick={() => props.onClickBestSeller("best sellers")}>
          best sellers
        </h6>
      </div>
      <BestSellers style={{ background: "black" }}>
        <section>
          <Background>
            <ProductListItem
              key={props.products[array[0]].id}
              product={props.products[array[0]]}
              addToCart={props.addToCart}
              removeFromCart={props.removeFromCart}
              onOpenProduct={props.onOpenProduct}
              cartItem={
                props.cart.filter(
                  cartItem => cartItem.id === props.products[array[0]].id
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
        {visibility ? (
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
            </Background>
          </section>
        ) : null}
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
    </Products>
  );
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
    id: state.id,
    bestSeller: state.bestSeller
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
    },

    onClickBestSeller: what => {
      dispatch({ type: "BEST_SELLER", payload: what });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListing);
