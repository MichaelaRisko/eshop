import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import menu from "./icons/menu.svg";
import fb from "./icons/facebook-logo.svg";
import ig from "./icons/instagram.svg";
import envelope from "./icons/envelope.svg";
import youtube from "./icons/youtube.svg";
import cancel from "./icons/cancel.svg";
import user from "./icons/user.svg";
import search from "./icons/search.svg";
import shoppingBag from "./icons/shopping-bag.svg";

const StyledLink = styled(NavLink)`
  cursor: pointer;
  text-decoration: none !important;
  color: black;
  text-transform: uppercase;
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

const HamburgerMenu = styled.table`
  background: black;
  z-index: 999;
  width: 100%;
  height: 100vh;
  tbody {
    display: flex;
    flex-direction: column;

    align-items: center;
  }
  tr {
    padding: 1em;
  }
  td {
  }
  a {
    color: white;
  }
`;

const Icon = styled.li`
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

export class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrolling: false
    };
    this.handleScroll = this.handleScroll.bind(this);
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
        <Icon onClick={() => this.props.handleMenu(1)}>
          <img
            style={{ cursor: "pointer" }}
            heigh={20}
            width={20}
            src={menu}
            alt={"menu"}
          />
        </Icon>
        <Icon>
          <StyledLink to="/" className="logo">
            yourcoffeeandprints
          </StyledLink>
        </Icon>
        <Icon>
          <StyledLink to="/user">
            <img
              style={{ cursor: "pointer" }}
              heigh={20}
              width={20}
              src={user}
              alt={"user"}
            />
          </StyledLink>
        </Icon>

        <Icon>
          <img
            style={{ cursor: "pointer" }}
            heigh={20}
            width={20}
            src={search}
            alt={"search"}
          />
        </Icon>
        <Icon>
          <StyledLink to={this.props.counter ? "/cart" : "/shop"}>
            {this.props.totalPrice ? this.props.totalPrice : null}
            <img
              style={{ cursor: "pointer" }}
              heigh={20}
              width={20}
              src={shoppingBag}
              alt={"shop"}
            />{" "}
            {this.props.counter ? this.props.counter : null}
          </StyledLink>
        </Icon>
      </ul>
    );
  }
}

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuVisibility: false
    };
    this.handleMenu = this.handleMenu.bind(this);
  }

  handleMenu(what) {
    console.log(what);
    if (what === 1) {
      this.setState({ menuVisibility: !this.state.menuVisibility });
    }
    if (what === 2) {
      this.setState({ menuVisibility: false });
    }
  }

  render() {
    let counter = 0;
    this.props.cart.map(item => (counter = counter + item.quantity));
    let totalPrice = 0;
    this.props.cart.map(
      item => (totalPrice = totalPrice + item.price * item.quantity)
    );

    const Hamburger = () => {
      if (true) {
        return (
          <HamburgerMenu>
            <thead>
              <tr>
                <th>
                  <img
                    style={{ cursor: "pointer" }}
                    heigh={20}
                    width={20}
                    src={cancel}
                    alt={"cancel"}
                    onClick={() => this.handleMenu(2)}
                  />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <StyledLink to="/cart" onClick={() => this.handleMenu(2)}>
                    Cart ({counter})
                  </StyledLink>
                </td>
              </tr>
              <tr>
                <td>
                  <StyledLink to="/shop" onClick={() => this.handleMenu(2)}>
                    Shop
                  </StyledLink>
                </td>
              </tr>
              <tr>
                <td>
                  <StyledLink to="/about" onClick={() => this.handleMenu(2)}>
                    About
                  </StyledLink>
                </td>
              </tr>
            </tbody>
          </HamburgerMenu>
        );
      }
      return null;
    };
    return (
      <Header>
        <div>
          <ul>
            <li />
            <li>first 500 orders get free stickers</li>
            <Icon>
              <img
                style={{ cursor: "pointer" }}
                heigh={15}
                width={15}
                src={ig}
                alt={"ig"}
              />
            </Icon>
            <Icon>
              <img
                style={{ cursor: "pointer" }}
                heigh={15}
                width={15}
                src={fb}
                alt={"fb"}
              />
            </Icon>
            <Icon>
              <img
                style={{ cursor: "pointer" }}
                heigh={15}
                width={15}
                src={youtube}
                alt={"youtube"}
              />
            </Icon>
            <Icon>
              <img
                style={{ cursor: "pointer" }}
                heigh={15}
                width={15}
                src={envelope}
                alt={"envelope"}
              />
            </Icon>
          </ul>
          <Nav
            counter={counter}
            totalPrice={totalPrice}
            handleMenu={this.handleMenu}
          />
        </div>
        {this.state.menuVisibility ? Hamburger() : null}
      </Header>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

export default connect(mapStateToProps)(Navigation);
