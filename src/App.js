import React, { Component } from 'react';
import Cart from "./Components/Cart";
import Navbar from "./Components/Navbar";




class App extends Component {
  constructor(){
    super()
    this.state = {
       products:[
           {
             price: 99999,
             title:"Mobile Phone" ,
            quantity: 1,
            img : "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
            id : 1
            },
           { 
            price: 10000,
            title:"Watch" ,
            quantity: 5,
            img : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/FWW12?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1580325951651",
            id : 2
            },
           {
            price: 150000,
            title:"laptop" ,
            quantity: 5,
            img : "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80",
            id : 3
            }
    ]
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