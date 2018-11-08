import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import menu from "./img/icon/menu.svg";
import fb from "./img/icon/facebook-logo.svg";
import ig from "./img/icon/instagram.svg";
import envelope from "./img/icon/envelope.svg";
import youtube from "./img/icon/youtube.svg";
//import { menu } from "./img/icon/menu.svg";

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
  margin: 0em;

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
    background: white;
    list-style: none;
    display: flex;
    flex-direction: row;
    padding: 0.5em 2em;
  }
  ul:first-child {
    background: black;
    color: white;
  }
`;

export class Nav extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      scrolling: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    if (window.scrollY < 100) {
      this.setState({ scrolling: false });
    } else {
      this.setState({ scrolling: true });
    }
  }

  render() {
    const style = {
      position: this.state.scrolling ? "fixed" : "relative",
      top: 0,
      width: "100vw",
      zIndex: 1
    };
    return (
      <ul style={style}>
        <li>
          <img heigh={20} width={20} src={menu} />
        </li>
        <li>
          <StyledLink to="/" className="logo">
            yourcoffeeandprints
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/cart">Cart ({this.props.counter})</StyledLink>
        </li>
        <li>
          <StyledLink to="/shop">Shop</StyledLink>
        </li>
        <li>
          <StyledLink to="/about">About</StyledLink>
        </li>
      </ul>
    );
  }
}

function Navigation(props) {
  let counter = 0;
  props.cart.map(item => (counter = counter + item.quantity));
  return (
    <Header>
      <div>
        <ul>
          <li />
          <li>first 500 orders get free stickers</li>
          <li>
            <img heigh={15} width={15} src={ig} />
          </li>
          <li>
            <img heigh={15} width={15} src={fb} />
          </li>
          <li>
            <img heigh={15} width={15} src={youtube} />
          </li>
          <li>
            <img heigh={15} width={15} src={envelope} />
          </li>
        </ul>
        <Nav counter={counter} />
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
