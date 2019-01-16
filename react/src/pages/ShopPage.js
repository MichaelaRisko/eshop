import React, {Component} from "react";

import ProductListing from "../features/product-listing";
import data from "../data/products.json";

class ShopPage extends Component{
  constructor(props){
    super(props);
    this.state={
      products: []
    }
  }

  componentDidMount(){
    this.getProducts();
  }

  getProducts=()=>{
    fetch('http://localhost:4000/products')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
  }

  render(){
    return( <div>
      <h2> Shop </h2>
      <ProductListing products={data.products} />
    </div>);
  }
}


export default  ShopPage;
   