import React, { Component } from 'react';
import Cart from "./Components/Cart";
import Navbar from "./Components/Navbar";
import { collection, getDocs , getFirestore } from "firebase/firestore"; 



class App extends Component {
  constructor(){
    super()
    this.state = {
       products:[]
    }
}

handleInc = (product)=>{
    const  products  = this.state.products;
    let index = products.indexOf(product);
    products[index].quantity = products[index].quantity + 1;

    this.setState({
        products : products
    })
}
handleDec = (product)=>{
    const products  = this.state.products;
    let index = products.indexOf(product);
    
    if(products[index].quantity !== 0)
    products[index].quantity-=1;
    this.setState({
        products : products
    })
}
handleDel = (id)=>{
    let items  = this.state.products;
    items = items.filter((item)=>{
        return item.id !== id
    })
    this.setState({
        products : items
    })
}
getCount = ()=>{
  let count  = 0;
  const products = this.state.products;
  products.forEach((prod)=>{
    count += prod.quantity;
  })

  return count;
}

getCartPrice = ()=>{
  let price = 0;
  const products = this.state.products;
  products.forEach((prod)=>{
    price += prod.quantity*prod.price;
  })
  return price;
}

  render() {
    return (
      <div className =" App ">
      <
        Navbar
        count = {this.getCount()}
      />
      <
        Cart
        products = {this.state.products}
        onInc = {this.handleInc}
        onDec = {this.handleDec}
        onDel = {this.handleDel}
      />
      <div style={{fontSize:20 , padding: 10}}>
        Total : {this.getCartPrice()}
      </div>
     </div>
    );
  }
}

export default App;