import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";

function Footer(props) {
  return (
    <div>
      <main className="header-info">
        <h2>newsletter</h2>
        <h6>subscribe our newsletter and get discount 50% off</h6>
      </main>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

export default connect(mapStateToProps)(Footer);
