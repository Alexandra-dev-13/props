import React, { Component } from 'react';
import ItemList from './component/product/itemList';
import "bootstrap/dist/css/bootstrap.min.css";

const products = [
  {
    name: "chaussure",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing",
    price: 2500
  },
  {
    name: "Robe",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing",
    price: 4000
  },
  {
    name: "Jean",
    description: "lorem ipsum dolor sit amet, consect",
    price: 6000
  },
]

class App extends Component {

  render() {
    return (
      <div>
        <ItemList products={products} />
      </div>
    );
  }
}




export default App;

