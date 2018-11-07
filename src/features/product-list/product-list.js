import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledBtn = styled.p`
  border: 1px solid;
  padding: 0.5em 0em;
  text-transform: uppercase;
  font-family: "Roboto", sans-serif;
  letter-spacing: 0.1em;
  font-size: 50%;
  text-align: center;
  background-color: rgb(219, 210, 207);
  color: white;
  width: 60%;

  &.remove {
    width: 35%;
    background-color: white;
    color: black;
    opacity: 0.5;
  }

  &:hover {
    transform: scale(1.05, 1.025);
    transition-duration: 0.25s;
    cursor: pointer;
  }
`;

const Item = styled.div`
  margin: 0.5em 0.5em;
  background: no-repeat center center;
  background-size: cover;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.03);
`;

export default function ProductListItem(props) {
  console.log(props);
  //const picture = `url("/products/01.png")`;
  const picture = `url("/products/${props.product.image}")`;

  return (
    <Item
      style={{ background: `${picture}` }}
      title={props.product.name}
      onClick={() => props.onOpenProduct(props.product)}
    >
      <NavLink
        to={`/planners/planner_id_${props.product.id}`}
        style={{ minHeight: "100%" }}
      />
      {/*
      <p>{props.product.name}</p>
      <p>${props.product.price}</p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        <StyledBtn onClick={() => props.addToCart(props.product)}>
          Add to cart ({(props.cartItem && props.cartItem.quantity) || 0})
        </StyledBtn>
        {props.cartItem ? (
          <StyledBtn
            className="remove"
            onClick={() => props.removeFromCart(props.cartItem)}
          >
            Remove
          </StyledBtn>
        ) : null}
      </div>*/}
    </Item>
  );
}
