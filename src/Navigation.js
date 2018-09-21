import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";

const StyledLink = styled(NavLink)`
  text-decoration: none !important;
  color: black;
  text-transform: uppercase;
  padding-right: 1em;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  &:hover {
    color: grey;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.7em 2em;

  .logo {
    font-family: "Abhaya Libre", serif;
    opacity: 0.7;
  }
  div {
    ul {
      text-transform: uppercase;
      align-items: center;
      justify-content: flex-end;
      margin: 0;

      li {
        padding-left: 1em;
      }

      li:first-child {
        margin-right: auto;
        padding-left: 0;
      }

      li:nth-child(2) {
        margin: auto;
      }
    }
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    padding: 0;
  }
`;

function Navigation(props) {
  let counter = 0;
  props.cart.map(item => (counter = counter + item.quantity));
  return (
    <Header>
      <div>
        <ul>
          <li>.</li>
          <li>
            <StyledLink to="/" className="logo">
              yourcoffeeandprints
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/cart">Cart ({counter})</StyledLink>
          </li>
          <li>
            <StyledLink to="/shop">Shop</StyledLink>
          </li>
          <li>
            <StyledLink to="/about">About</StyledLink>
          </li>
        </ul>
      </div>

      {false && (
        <nav>
          <ul>
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="/cart">Cart ({counter})</StyledLink>
            </li>
            <li>
              <StyledLink to="/shop">Shop</StyledLink>
            </li>
            <li>
              <StyledLink to="/about">About</StyledLink>
            </li>
          </ul>
        </nav>
      )}
    </Header>
  );
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

export default connect(mapStateToProps)(Navigation);
