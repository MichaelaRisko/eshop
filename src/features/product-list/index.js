import React from "react";
import ProductListItem from "./product-list";
import { connect } from "react-redux";
import styled from "styled-components";

const Products = styled.div`
  margin: 3em;
  display: flex;
  flex-direction: column;
  align-items: center;
  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    h6 {
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;
const BestSellers = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  section {
    display: flex;
    flex-direction: row;
    flex-grow: 2;
    order: 3;
    max-height: 50vw;
    min-height: 50vw;
    div {
      display: flex;
      flex-direction: column;
      order: 1;
      flex-grow: 1;
    }
  }

  section:first-child {
    order: 1;
  }

  section:nth-child(3) {
    flex-grow: 1.5;
    order: 2;
  }
`;

const Column = styled.div`
  width: auto;
`;

/*
DO NOT FORGET THAT YOU NEED TO HAVE AT LEAST 11 PRODUCTS, OTHERWISE CHANGE KEYS TO UNIQUE
*/

function ProductListing(props) {
  //const array = [1, 2, 3, 4, 0, 1, 1, 2, 3, 4, 0];
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const shuffle = o => {
    for (
      var j, x, i = o.length;
      i;
      j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
    );
    return o;
  };

  const what = props.bestSeller.length ? props.bestSeller : array;

  return (
    <Products>
      <h2>#bestsellers</h2>
      <div className="row">
        <h6 onClick={() => props.onClickBestSeller(shuffle(array))}>
          featured
        </h6>
        <h6 onClick={() => props.onClickBestSeller(shuffle(array))}>
          new arrivals
        </h6>
        <h6 onClick={() => props.onClickBestSeller(shuffle(array))}>
          best sellers
        </h6>
      </div>
      <BestSellers style={{ background: "black" }}>
        <section>
          <Column>
            <ProductListItem
              key={props.products[what[0]].id}
              product={props.products[what[0]]}
            />
            <ProductListItem
              key={props.products[what[1]].id}
              product={props.products[what[1]]}
            />
            <ProductListItem
              key={props.products[what[2]].id}
              product={props.products[what[2]]}
            />
          </Column>
          <Column>
            <ProductListItem
              key={props.products[what[3]].id}
              product={props.products[what[3]]}
            />
            <ProductListItem
              key={props.products[what[4]].id}
              product={props.products[what[4]]}
            />
          </Column>
        </section>

        <section>
          <Column>
            <ProductListItem
              key={props.products[what[5]].id}
              product={props.products[what[5]]}
            />
            <ProductListItem
              key={props.products[what[6]].id}
              product={props.products[what[6]]}
            />
            <ProductListItem
              key={props.products[what[7]].id}
              product={props.products[what[7]]}
            />
          </Column>
          <Column>
            <ProductListItem
              key={props.products[what[8]].id}
              product={props.products[what[8]]}
            />
            <ProductListItem
              key={props.products[what[9]].id}
              product={props.products[what[9]]}
            />
          </Column>
        </section>

        {props.bestSeller.length === 0 ? (
          <section>
            <Column>
              <ProductListItem
                key={props.products[what[10]].id}
                product={props.products[what[10]]}
              />
            </Column>
          </section>
        ) : null}
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
