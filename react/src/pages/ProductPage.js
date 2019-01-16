import React, { Component } from "react";

import styled from "styled-components";

const StyledBtn = styled.p`
  border: 1px solid;
  padding: 0.5em 0em;
  text-transform: uppercase;
  font-family: "Roboto", sans-serif;
  letter-spacing: 0.1em;
  font-size: 1em;
  text-align: center;
  background-color: rgb(219, 210, 207);
  color: white;
  width: 50%;

  &:hover {
    transform: scale(1.05, 1.025);
    transition-duration: 0.25s;
    cursor: pointer;
  }
`;

const Product = styled.div`
  display: flex;
  flex-direction: row;
  section {
    width: 40%;
  }
  .mainPic {
    max-width: 100%;
  }
  aside {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    max-width: 100%;
    img {
      width: 7em;
      height: 7em;
      padding: 1em 1em 0 0;
    }
  }
  section:last-child {
    width: 20%;
  }
  .description {
    padding: 0 2em;
  }
`;

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: [false, false, false],
      counter: 0
    };
  }

  expandPanel(number) {
    let array = this.state.expanded;
    if (array[number] === true) {
      array.splice(number, 1, false);
    } else {
      array.splice(number, 1, true);
    }
    this.setState({
      expanded: array
    });
  }

  increaseCounter() {
    this.setState({ counter: this.state.counter + 1 });
    this.props.addToCart(this.props.selectedItem);
  }

  render() {
    return (
      <Product>
        <section>
          <img
            className="mainPic"
            src={`/products/${this.props.selectedItem.image}`}
          />
          {this.props.selectedItem.secondary_images && (
            <aside>
              {this.props.selectedItem.secondary_images.map(item => (
                <img key={item} src={`/products/${item}`} />
              ))}
            </aside>
          )}
        </section>

        <section className="description">
          <h2>{this.props.selectedItem.name}</h2>
          <p>{this.props.selectedItem.description}</p>
          <aside style={{ justifyContent: "space-between" }}>
            <p>price</p>
            <p>{this.props.selectedItem.price}</p>
          </aside>
          <StyledBtn onClick={() => this.increaseCounter()}>
            Add to cart {this.state.counter !== 0 ? this.state.counter : null}
          </StyledBtn>
          <article>
            <h1 onClick={() => this.expandPanel(0)}>description </h1>
            {this.state.expanded[0] && (
              <p>{this.props.selectedItem.description}</p>
            )}
            <h1 onClick={() => this.expandPanel(1)}>description </h1>
            {this.state.expanded[1] && (
              <p>{this.props.selectedItem.description}</p>
            )}
          </article>
        </section>
        <section>
          <p>email</p>
        </section>
      </Product>
    );
  }
}

export default ProductPage;
