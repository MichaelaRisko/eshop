import React, {Component} from "react";
import styled from "styled-components";

const StyledBtn = styled.p`
  border: 1px solid;
  padding: 0.5em !important;
  text-transform: uppercase;
  font-family: "Roboto", sans-serif;
  letter-spacing: 0.1em;
  max-width: 28%;
  font-size: 90%;
  text-align: center;

  &:hover {
    transform: scale(1.05, 1.025);
    transition-duration: 0.25s;
    cursor: pointer;
  }
`;

class AddPage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      products_id: '',
      name: '',
      price: '',
      description: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event, what) {
    this.setState({[what]: event.target.value});
  }

  handleSubmit(event) {
  //if 

    alert(`products_id was submitted:  ${this.state.products_id}  
    name was submitted:  ${this.state.name}
    price was submitted:  ${this.state.price}
    description was submitted:  ${this.state.description}`);
    event.preventDefault();

    this.addProduct();

  }

  addProduct(){
    console.log(`products_id was submitted:  ${this.state.products_id}  
    name was submitted:  ${this.state.name}
    price was submitted:  ${this.state.price}
    description was submitted:  ${this.state.description}`)
    fetch(`http://localhost:4000/products/add?products_id=${this.state.products_id}&name=${this.state.name}&price=${this.state.price}&description=${this.state.description}`)

    .then(data => console.log(data));
      

  }

  render(){
    return (
      <div style={{padding: '5em'}}>
       <form onSubmit={this.handleSubmit} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>

       <label style={{padding: '1em'}}>
       products_id:
          <input type="text" value={this.state.products_id} onChange={(e) => this.handleChange(e, 'products_id')} />
        </label>
        <label style={{padding: '1em'}}>
          Name:
          <input type="text" value={this.state.name} onChange={(e) => this.handleChange(e, 'name')} />
        </label>
        <label style={{padding: '1em'}}>
        price:
          <input type="text" value={this.state.price} onChange={(e) => this.handleChange(e, 'price')} />
        </label>
        <label style={{padding: '1em'}}>
        description:
          <input type="text" value={this.state.description} onChange={(e) => this.handleChange(e, 'description')} />
        </label>
        <button style={{width: '250px'}} type="submit" onClick={this.handleSubmit}>add product</button>
      </form>
      </div>
    );
  }P}

export default  AddPage;