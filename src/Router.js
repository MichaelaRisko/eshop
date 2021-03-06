import React from "react";
import { Switch, Route } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import data from "./data/products.json";
import LandingPage from "./LandingPage.js";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import ShopPage from "./pages/ShopPage";
import AboutPage from "./pages/AboutPage";
import ProductPage from "./pages/ProductPage";

const Router = props => {
  const Product = () => (
    <ProductPage
      selectedItem={props.selectedItem}
      addToCart={props.addToCart}
    />
  );
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/cart" component={CartPage} />
      <Route exact path="/shop" component={ShopPage} />
      <Route exact path="/about" component={AboutPage} />
      <Route
        exact
        path={"/planners/planner_id_1"}
        component={() => (
          <ProductPage
            selectedItem={data.products[0]}
            addToCart={props.addToCart}
          />
        )}
      />
      <Route
        exact
        path={`/planners/planner_id_${props.selectedItem.id}`}
        component={Product}
      />
    </Switch>
  );
};

function mapStateToProps(state) {
  return {
    selectedItem: state.selectedItem
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: item => {
      dispatch({ type: "ADD", payload: item });
    }

    /*
    removeFromCart: item => {
      dispatch({ type: "REMOVE", payload: item });
    },

    onOpenProduct: item => {
      dispatch({ type: "OPEN", payload: item });
    }
   
   */
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Router)
);
