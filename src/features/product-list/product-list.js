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
  background-size: cover !important;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  height: 100%;
  &:hover {
    transform: scale(1.03);
  }
  a {
    height: 100% !important;
  }
`;

export default function ProductListItem(props) {
  console.log(props);
  //const picture = `url("/products/01.png")`;
  const picture = `url("/products/${
    props.product.image
  } ") no-repeat center center`;

  return (
    <Item style={{ background: `${picture}` }} title={props.product.name}>
      <NavLink
        to={`/planners/planner_id_${props.product.id}`}
        onClick={() => props.onOpenProduct(props.product)}
      />
      {false ? (
        <div>
          <p>{props.product.name}</p>
        </div>
      ) : null}
    </Item>
  );
}
