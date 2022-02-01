import React from 'react';
import CartItem from './CartItem';
const Cart = (props)=> {
        const product = props.products;
        return (
            <div className ='cart'>
                {
                    product.map((prod) => {
                    return (
                    <CartItem 
                    product = {prod} 
                    key =   {prod.id}
                    onInc = {props.onInc}
                    onDec = {props.onDec}
                    onDel = {props.onDel}
                    />   
                     )
                })
            } 
            </div>
        );
    
}

export default Cart;